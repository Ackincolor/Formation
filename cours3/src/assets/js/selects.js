var CustomSelects = {
  init: function() {
    CustomSelects.customPlaceholder();

    /**
     * Permet de collapse/expand les <optgroup> des selecteurs "accounts"(.select2-dropdown--accounts)
     */
    $("body").on('click', '.select2-dropdown--accounts .select2-results__group', function() {
      $(this).toggleClass('is-active').siblings().toggle();
    });

    CustomSelects.addCountToSelect($('.js-select2-accounts').select2({
      placeholder: function() {
        $(this).data('placeholder');
      },
      searchInputPlaceholder: "Rechercher un compte bancaire",
      selectionCssClass: "select2-selection--accounts",
      dropdownCssClass: "select2-dropdown--accounts",
      escapeMarkup: function(markup) {
        return markup
      },
    }));

    $('.js-select2-currency').select2({
      minimumResultsForSearch: Infinity,
      selectionCssClass: "select2-selection--purple",
      dropdownCssClass: "select2-dropdown--currencies",
      dropdownAutoWidth : true,
      dropdownParent: $('.js-select2-currency').closest('.input-group'),
    });

    $('.js-select2-default').select2({
      minimumResultsForSearch: Infinity,
      dropdownCssClass: "select2-dropdown--default",
    });

    $(".js-select2-lang").select2({
      minimumResultsForSearch: Infinity,
      dropdownCssClass: "select2-dropdown--default",
      templateResult: function (lang) {
        var $span = $("<span><img class='me-10' src='assets/img/lang/"+lang.id+".svg'/> " + lang.text + "</span>");
        return $span;
      },
      templateSelection: function (lang) {
        var $span = $("<span><img class='me-10' src='assets/img/lang/"+lang.id+".svg'/> " + lang.text + "</span>");
        return $span;
      },
    });

    // $('.js-select2-find').select2({
    //   minimumResultsForSearch: Infinity,
    //   dropdownCssClass: "select2-dropdown--find"
    // });

    $(".js-select2-tags").select2({
      dropdownCssClass: "select2-dropdown--default",
      tags: true
    }).on('change', function() {
      var $selected = $(this).find('option:selected');
      var $container = $(this).siblings('.js-select2-tags-container');
    
      var $list = $('<ul>');
      $selected.each(function(k, v) {
        var $li = $('<li class="tag-selected"><a class="destroy-tag-selected">×</a>' + $(v).text() + '</li>');
        $li.children('a.destroy-tag-selected')
          .off('click.select2-copy')
          .on('click.select2-copy', function(e) {
            var $opt = $(this).data('select2-opt');
            $opt.prop('selected', false);
            $opt.parents('select').trigger('change');
          }).data('select2-opt', $(v));
        $list.append($li);
      });
      $container.html('').append($list);
    }).trigger('change');
  },

  /**
   * Implémentation de l'option 'searchInputPlaceholder' au sein de la librairie Select2
   * Facilite la gestion des placeholders des champs "Recherche"
   */
  customPlaceholder: function() {
    var Defaults = $.fn.select2.amd.require('select2/defaults');
  
    $.extend(Defaults.defaults, { searchInputPlaceholder: '' });
    
    var SearchDropdown = $.fn.select2.amd.require('select2/dropdown/search');
    var renderSearchDropdown = SearchDropdown.prototype.render;
    
    SearchDropdown.prototype.render = function(decorated) {
      var $rendered = renderSearchDropdown.apply(this, Array.prototype.slice.apply(arguments));
      this.$search.attr('placeholder', this.options.get('searchInputPlaceholder'));
      return $rendered;
    };
  },

  addCountToSelect: function(el) {
    var optgroups = el.find('optgroup');

    if (optgroups.length > 0) {
      optgroups.each(function() {
        var options = $(this).find('option');
        var optionsCount = options.length;
        
        var badge = "<span class='badge rounded-pill bg-primary ms-10'>" + optionsCount + "</span>";
        
        $(this).attr('label', $(this).attr('label') + badge);
      });
    } else {
      var options = el.find('option');
      var optionsCount = options.length;
      
      var badge = "<span class='badge rounded-pill bg-primary ms-10 " + optionsCount + "</span>";
      $('.optionsCount').html(badge);
    }
  }
}

CustomSelects.init();