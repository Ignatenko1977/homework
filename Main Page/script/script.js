$('.about-items > div').on('click', function () {
    $(this).children('.about-icon').toggleClass('about-rotate__icon');
    $(this).parent('.about-items').toggleClass('change-color');
    $(this).next('.about-text').slideToggle(300);
})
$('.features-items > div').on('click', function () {
    $(this).parent('.features-items').toggleClass('changes-color');
    $(this).next('.features-text').slideToggle(300);
    $(this).children('.features-items__title').children('p').toggleClass('blue-color')
})