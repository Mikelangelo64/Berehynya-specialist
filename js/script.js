$(document).ready(function () {
   
    //animateOn
    wow = new WOW({
        boxClass:     'wow',   
        animateClass: 'animated', 
        offset:       0,         
        mobile:       true,       
        live:         true       
      })
    wow.init();

    //menuToggle
    $('.menu__toggle').click(function(e){
        $(this).toggleClass('_active-menu')
        $('.menu__box').toggleClass('_active-menu')
        $('body').toggleClass('_lock')

    })

    //scrollTo next main
    $('.btn__sroll__down').click(function(e) {
        $([document.documentElement, document.body]).animate({
            scrollTop: $('.btn__sroll__down').parent().next().offset().top
        }, 500)
        
        e.preventDefault()
    })

    //scrollTo anchor
    $('.menu__link').click(function(event){
        onMenuLinkClick(event);
    })

    function onMenuLinkClick(event){
        const menuLink = event.target;
	    const goto = $(menuLink).attr('data-goto');
        if(goto && $(goto)){
            $([document.documentElement, document.body]).animate({
                scrollTop: $(goto).offset().top
            }, 500)
        }
        if($('.menu__toggle').hasClass('_active-menu')){
            $('.menu__toggle').removeClass('_active-menu')
            $('.menu__box').removeClass('_active-menu')
            $('body').removeClass('_lock')
        }

        event.preventDefault();
    }
})