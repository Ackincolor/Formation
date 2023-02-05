// var Tabs = {
//   init: function() {
//     /**
//      * Dans l'historique des opérations,
//      * nous ne voulons pas afficher le bouton de filtre.
//      * On détecte donc l'onglet actif et masquons (ou réaffichons) le bouton de filtre
//      */
//     $('.nav-tabs-history a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
//       var target = $(e.target).attr("href")

//       if (target === "#tab-2") {
//         $('.btn-filter').addClass('hide');
//       } else {
//         $('.btn-filter').removeClass('hide');
//       }
//     })
//   }
// }

// Tabs.init();