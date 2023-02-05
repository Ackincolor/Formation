
const ToggleShow = {
  init: function() {
    ToggleShow.onClickHandler();
  },

  onClickHandler: () => {
    $('.js-radio').on("click", function () {
      let radioName = ".rs-" + $(this).attr("name");
      let radioTargetDiv = $(radioName + ".rs-" +  $(this).attr("id"));

      $(radioName).not(radioTargetDiv).addClass("d-none");
      radioTargetDiv.removeClass("d-none");
    });


    $('.table .form-check-input').change(function() {
      const isChecked = $(this).is(':checked');
      const root = $(this).closest('tr');
    
      isChecked ? root.addClass('is-selected') : root.removeClass('is-selected')
    })

    $('.form-check-wrapper .form-check-input').change(function() {
      const isChecked = $(this).is(':checked');
      const root = $(this).closest('.form-check-wrapper');
    
      isChecked ? root.addClass('is-selected') : root.removeClass('is-selected')
    })
  },
}

ToggleShow.init();