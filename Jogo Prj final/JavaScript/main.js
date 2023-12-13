function openMenu() {
    $('.js-menu-container').addClass('is-open');
}


function closeMenu() {
    $('.js-menu-container').removeClass('is-open'); 
}

// Documento pronto

jQuery(document).ready(function($){ 

    $('.js-menu-button').click(function(){ 
        openMenu(); 
    });

    $('.js-menu-close').click(function(){ 
        closeMenu(); 
    });

});


jQuery(document).keyup(function(e) { 

    if (e.keyCode === 27) { 

        if ($('.js-menu-container').hasClass('is-open')) {
            closeMenu(); 
        }

    }

});