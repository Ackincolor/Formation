// Permet de de simuler un lien au clic sur un <tr>
$('tr[data-url]').click(function(e) {
  if (!$(e.target.closest('button')).is(':button')) {
    document.location.href = $(this).data('url');
  }
});

$(".js-toggle-tr").click(function() {
  $(this).toggleClass('is-open').next().toggle();
});