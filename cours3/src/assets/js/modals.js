// Toggle between modals and save active class on body
$('.modal').on('shown.bs.modal', () => {
  $("body").addClass("modal-open")
});