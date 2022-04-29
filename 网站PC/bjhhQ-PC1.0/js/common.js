$(function() {
    /* 滚动事件*/
    $(window).scroll(function() {
        if ($(document).scrollTop() > 80) {
            $(".headerpage").addClass("header2")
            $(".headerpage .logo-box img").attr("src", "./images/logo_2.png")
            $(".headerpage .phone-box img").attr("src", "./images/icon_phone_3.png")
            console.log(111111)
        } else {
            $(".headerpage").removeClass("header2")
            $(".headerpage .logo-box img").attr("src", "./images/logo.png")
            $(".headerpage .phone-box img").attr("src", "./images/icon_phone.png")
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
        // header
    $(function() {
        $(".download-box .text").hover(function() {
            $(this).parent().find("img").show()
        }, function() {
            $(this).parent().find("img").hide()
        })
    });

})