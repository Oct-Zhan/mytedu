$(function() {

    /* 滚动事件 顶部导航交互效果 */
    $(window).scroll(function() {
        if ($(document).scrollTop() > 80) {
            $("#headerpage header").addClass("header2")
            $("#headerpage .logo-box img").attr("src", "./images/logo_2.png")
            $("#headerpage .phone-box img").attr("src", "./images/icon_phone_3.png")
        } else {
            $("#headerpage header").removeClass("header2")
            $("#headerpage .logo-box img").attr("src", "./images/logo.png")
            $("#headerpage .phone-box img").attr("src", "./images/icon_phone.png")
        }
        var height = $(document.body).height() - 1280 - 485
        if ($(document).scrollTop() >= height) {
            $(".float-box").css("position", "static")
        } else {
            $(".float-box").css("position", "fixed")
        }
    });

    $('.float-box .icon_close').click(function() {
        $('.float-box').hide()
    })


})