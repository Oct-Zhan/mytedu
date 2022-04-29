$(function() {
    var bannerImgList = [
        './images/zhuangqiERP/banner.png',
        './images/zhuangqiERP/banner.png',
        './images/zhuangqiERP/banner.png'
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
    var windowHeight = $(window).height()
    if (windowHeight > 700) {
        if (!$(".box1-content .img").hasClass("animate__animated")) {
            $(".box1-content .img").addClass('animate__animated animate__bounceIn')
        }
    }
    var p = 0,
        t = 0;
    $(window).scroll(function(e) {
        p = $(this).scrollTop();
        if (t <= p) { //下滚  
            if (windowHeight <= 700) {
                if (p > 100) {
                    if (!$(".box1-content .img").hasClass("animate__animated")) {
                        $(".box1-content .img").addClass('animate__animated animate__bounceIn')
                    }
                }
            }
            if (p > 5100) {
                if (!$(".box10 .title-box").hasClass("animate__animated")) {
                    $('.box10 .title-box').addClass("animate__animated animate__fadeInUp")
                    $('.box10 .box10-nav').addClass('animate__animated animate__fadeInRight')
                    $('.box10 .swiper-container').addClass('animate__animated animate__fadeInUp')
                    mySwiper()
                }
            }

        } else { //上滚  
        }
        t = p;
    })
    var t1 = setTimeout(function() {
        $(".box1-content .text-2,.box1-content .text-5,.box1-content .text-8,.box1-content .text-11").css("opacity", "1")
        clearTimeout(t1)
    }, 600)
    var t2 = setTimeout(function() {
        $(".box1-content .text-1,.box1-content .text-6,.box1-content .text-7,.box1-content .text-12").css("opacity", "1")
        clearTimeout(t2)
    }, 800)


    $(".box2 .item").hover(function() {
        $(this).find('.item-top').css('display', 'none')
        $(this).find('.item-bom').css('display', 'flex')
    }, function() {
        $(this).find('.item-bom').css('display', 'none')
        $(this).find('.item-top').css('display', 'flex')
    })


    function mySwiper() {
        var mySwiper = new Swiper('.box10 .swiper-container', {
            direction: 'horizontal',
            loop: true,
            speed: 800,
            effect: 'coverflow',
            autoplay: {
                delay: 5000,
                disableOnInteraction: true
            }
        })
        $(".box10 .nav").hover(function(e) {
            var index = e.currentTarget.dataset.id
            mySwiper.slideTo(index, 1000, false);
        })
    }

})