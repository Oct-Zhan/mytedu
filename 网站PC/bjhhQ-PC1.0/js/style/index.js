$(function() {
    // 渲染banner轮播图
    var bannerImgList = [
        './images/index/index_banner_1.png',
        './images/index/index_banner_2.png',
        './images/index/index_banner_3.png'
    ]
    $(".banner-box .swiper-slide").each(function(index) {
            $(this).css("background-image", "url('" + bannerImgList[index] + "')")
        })
        // banner 轮播
    var bannerSwiper = new Swiper('.banner-box .swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 10000
        },
        effect: 'fade',
        pagination: {
            el: '.banner-box .swiper-pagination',
            clickable: true
        }
    })

    $(".free-box .item-box").hover(function() {
        $(this).find('.icon1').attr("src", "./images/icon_2.png")
        $(this).find('.icon2').attr("src", "./images/icon_4.png")
        $(this).find('.code-img').show()
    }, function() {
        $(this).find('.icon1').attr("src", "./images/icon_1.png")
        $(this).find('.icon2').attr("src", "./images/icon_3.png")
        $(this).find('.code-img').hide()
    })

    function cutText(index) {
        $(".box1 .item").removeClass("item-cur")
        $(".box1 .item-" + index).addClass("item-cur")
        $(".box1 .item").find(".text>img").attr("src", "./images/icon_5.png")
        for (var i = 1; i < 4; i++) {
            $(".box1 .item").find(".img" + i).attr("src", "./images/index/box1_img_" + i + ".png")
        }
        $(".box1 .item-" + index).find(".title-box>img").attr("src", "./images/index/box1_sel_img_" + index + ".png")
        $(".box1 .item-" + index).find(".text>img").attr("src", "./images/icon_6.png")
    }
    cutText(1)
    var i = 2
    var t1 = setInterval(() => {
        if (i == 4) {
            i = 1
            cutText(i)
        } else {
            cutText(i)
        }
        i++
    }, 5000);
    $(".box1 .item").hover(function(e) {
        clearInterval(t1)
        var index = e.currentTarget.dataset.index
        cutText(index)
    })

    var swiper2 = new Swiper('.box4 .swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 5000
        },
        pagination: {
            el: '.box4 .swiper-pagination',
            clickable: true
        }
    })

    var swiper3 = new Swiper('.box6 .swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 5000
        },
        pagination: {
            el: '.box6 .swiper-pagination',
            clickable: true
        }
    })


    $(".free-phone-mask .phone").bind('input propertychange', function() {
        var len = $(this).val().length;
        if (len == 11) {
            $(".free-phone-mask .btn").addClass("btn2")
        } else {
            $(".free-phone-mask .btn").removeClass("btn2")
        }
    })
    $(".free-phone-mask .icon-close").click(function() {
        $(".free-phone-mask").hide()
    })
    $(".asidepage .btn1").click(function() {
        $(".free-phone-mask").show()
    })
    $(".asidepage .btn2").click(function() {
        $('html,body').animate({ scrollTop: 2346 + "px" }, 300);
    })
    $(".asidepage .btn3").click(function() {
        $('html,body').animate({ scrollTop: 0 + "px" }, 300);
    })



})