$('.find-item > div').on('click', function () {
    $(this).children('.find-icon').children('.find-cursor').toggleClass('find-rotate__icon');
    $(this).parent('.find-item').toggleClass('change-color');
    $(this).children('.find-help__text').toggleClass('whit-colors')
    $(this).children('.find-icon').toggleClass('whit-color');
    $(this).children('.find-icon').children('.find-cursor').toggleClass('orange-color');
    $(this).next('.find-text').slideToggle(300);

})

$('.slider > div').on('click', function () {
    $(this).children('.spaces-icon').toggleClass('spaces-button');
    $(this).children('.spaces-icon').children('.spaces-icon__text').toggleClass('spaces-button__text');
    $(this).children('.spaces-icon').children('.spaces-cursor').toggleClass('spaces-button__cursor');
    $(this).children('.slider-content').toggleClass('slider-cont')
    $(this).children('.private-text').toggleClass('priv-text');


})


$('.private-spaces').slick({
    Infinite: false,
    slidesToShow: 3,
    prevArrow: $('.spaces-prev'),
    nextArrow: $('.spaces-next'),
    dots: true,
    responsive: [
        {
            breakpoint: 1090,
            settings: {
                slidesToShow: 2,

            }

        },
        {
            breakpoint: 551,
            settings: {
                slidesToShow: 1,

            }

        }
    ]
});


$('.frispes-gallery__img').slick({
    Infinite: false,
    prevArrow: $('.left-arrow__prev'),
    nextArrow: $('.right-arrow__next'),
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,

            }

        }

    ]

})

$('.reviews-flex').slick({
    Infinite: false,
    prevArrow: $('.reviews-prev'),
    nextArrow: $('.reviews-next'),
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,

            }
        }

    ]
});

// $(window).on('resize', function () {
//     if ($(window).width() < 850) {
//         $('.frispes-flex').slick({
//             Infinite: false,
//             slidesToShow: 1,
//         })
//     }
// });

$('#menuToggle #toggleCheckbox').change(function () {
    if (this.checked) {
        $('body').css({ 'overflow': "hidden" })
    }
    else {
        $('body').css({ 'overflow': "visible" })
    }
});


$('#contacts-link').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({ scrollTop: $('#contact').offset().top }, 1000)
})

$('#reviews-link').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({ scrollTop: $('#reviews').offset().top }, 1000)
})