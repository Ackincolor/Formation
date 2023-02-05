var Checkbox = {
  init: function() {
    const checkAll = $('.js-checkAll');

    this.onCheckboxChange(checkAll);
  },

  onCheckboxChange: function(el) {
    const checkboxInTable = $('.table tbody input[type="checkbox"]');

    el.on('change', (e) => {
      const $this = $(e.currentTarget);

      if ($this.is(':checked')) {
        checkboxInTable.prop('checked', true);
        checkboxInTable.closest('tr').addClass('is-selected');
        counter = $('.table tbody input[type="checkbox"]').length;
      } else {
        checkboxInTable.prop('checked', false)
        checkboxInTable.closest('tr').removeClass('is-selected');
      }

      this.checkboxCount(checkboxInTable)
    });

    checkboxInTable.on('change', () => {
      this.checkboxCount(checkboxInTable)
    })
  },

  checkboxCount: function(el) {
    let counter = el.filter(':checked').length;
    $('.js-counter').html(counter);
  }
}

Checkbox.init();