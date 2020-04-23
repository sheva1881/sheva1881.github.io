$(document).ready(function(){
    $('.slider__container').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        infinite: true,
        responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        },

        {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        },

        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        },

        ]
    });
});

$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
});