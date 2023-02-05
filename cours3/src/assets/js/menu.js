const sidebar = $('.sidebar');
const body = $('body');
let debounce;

const Menu = {
  init: () => {
    Menu.onLoad();
    Menu.onResize();
    Menu.onClick();
  },

  onClick: () => {
    $('.js-sidebarToggler').on('click', () => {
      body.toggleClass('sidebar-expanded');
      sidebar.toggleClass('sidebar-compact');
      sidebar.hasClass('sidebar-compact') && body.hasClass('sidebar-expanded') ? localStorage.sidebar = 'compact' : localStorage.removeItem('sidebar');
    });

    // Sidebar Menu Handle
    $('.sidebar-menu').on('click', (e) => {
      const menuLink = $(e.target).closest('a');

      if (!menuLink.hasClass('menu-dropdown')) {
        if (sidebar.hasClass('sidebar-compact') && menuLink.get(0).parent().parent() == this) {
          const menuText = menuLink.find('.menu-text').get(0);
          if (e.target !== menuText && !$.contains(menuText, e.target)) {
            return false;
          }
        }
      }

      const submenu = menuLink.next().get(0);

      if (!$(submenu).is(':visible')) {
        const c = $(submenu.parentNode).closest('ul');

        if (sidebar.hasClass('sidebar-compact') && c.hasClass('sidebar-menu'))
          return;
        c.find('> .is-open > .menu-submenu')
          .each(function () {
            $(this).slideUp(0).parent().removeClass('is-open');
          });
      }

      if (sidebar.hasClass('sidebar-compact') && $(submenu.parentNode.parentNode).hasClass('sidebar-menu'))
        return false;
        $(submenu).slideToggle(0).parent().addClass('is-open');
    })
  },

  onLoad: () => {
    ('sidebar' in localStorage) ? sidebar.addClass('sidebar-compact') : sidebar.removeClass('sidebar-compact');
  },

  onResize: () => {
    $(window).on('resize', () => {
      clearTimeout(debounce);
      debounce = setTimeout(Menu.breakpointChecker, 250);
    })
  },

  breakpointChecker: () => {
    if (!$(window).width() > 992 && (!$(window).width() < 1720)) return;
    if ($(window).width() > 992 && $(window).width() < 1720 && !sidebar.hasClass('sidebar-compact')) 
      localStorage.sidebar = 'compact';
      Menu.onLoad();
  }
}

Menu.init();