var Tooltips = {
    init: function() {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        this.deltaCursorY = 5; // Position de la tooltip mouvante par rapport au curseur en Y
        this.deltaCursorX = 0; // Position de la tooltip mouvante par rapport au curseur en X
        tooltipTriggerList.map(tooltipTriggerEl => {
            if (tooltipTriggerEl.getAttribute('data-tooltip-follow')){
                this.createFollowingTootltip(tooltipTriggerEl);
            }
            else {
                new bootstrap.Tooltip(tooltipTriggerEl);
                this.hideFollowingTooltips(tooltipTriggerEl);
            }
        });
    },

    hideFollowingTooltips: function(el) {
        if (!el) { return; }
        el.addEventListener('mouseenter', e => {
            var followingtooltips = document.querySelectorAll('.followingtooltip');
            for (var i = 0; i < followingtooltips.length; i++){
                followingtooltips[i].prevStyle = followingtooltips[i].style.display;
                followingtooltips[i].style.display = 'none';
            }
        });

        el.addEventListener('mouseleave', e => {
            var followingtooltips = document.querySelectorAll('.followingtooltip');
            for (var i = 0; i < followingtooltips.length; i++) {
                followingtooltips[i].style.display = followingtooltips[i].prevStyle;
            }
        });
    },

    createFollowingTootltip: function(el) {
        var followingtooltip = null;

        el.addEventListener('mouseenter', e => {
            followingtooltip = this.cloneTootltip(el);
            followingtooltip.style.display = 'block';
        });

        el.addEventListener('mousemove', e => {
            if (followingtooltip != null){
                var cursorX = (window.Event) ? e.pageX : e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
                var cursorY = (window.Event) ? e.pageY : e.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
                followingtooltip.style.top = (cursorY - followingtooltip.offsetHeight - this.deltaCursorY) + 'px';
                followingtooltip.style.left = (cursorX - this.deltaCursorX) + 'px';
            }
        });

        el.addEventListener('mouseleave', e => {
            followingtooltip.remove();
            followingtooltip = null;
        });   
    },

    cloneTootltip: function(el) {
        var ttip = new bootstrap.Tooltip(el);
        var el = ttip._element;
        if (!el) { return; }
        ttip.show();
        var ttipclone = ttip.tip.cloneNode(true);
        ttipclone.classList.add('followingtooltip');
        ttip.dispose();
        ttipclone.style.transform = 'none';
        ttipclone.style.display = 'none';
        ttipclone.style.pointerEvents = 'none';
        document.body.appendChild(ttipclone);
        return ttipclone;
    }
}

Tooltips.init();