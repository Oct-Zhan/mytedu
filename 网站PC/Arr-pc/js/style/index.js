jQuery(".aui-banner-main").slide({
    mainCell: ".bd ul",
    effect: "left",
    autoPlay: true,
    trigger: "click",
    delayTime: 700
});
$(window).on('scroll', function() {
    if ($(document).scrollTop() > 10) {
        $('.aui-header-nav').addClass('solid').removeClass('moveDown');
        $('.aui-header-top').addClass('moveUp');
    } else {
        $('.aui-header-nav').removeClass('solid').addClass('moveDown');
        $('.aui-header-top').removeClass('moveUp');
    }
});