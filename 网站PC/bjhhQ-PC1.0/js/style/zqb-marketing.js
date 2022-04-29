$(function() {
    // 渲染banner轮播图
    var bannerImgList = [
        './images/marketing/banner.png',
        './images/marketing/banner.png',
        './images/marketing/banner.png'
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
    var t1 = setTimeout(function() {
        $(".box1-content .text-2,.box1-content .text-4,.box1-content .text-7").css("opacity", "1")
        clearTimeout(t1)
    }, 600)
    var t2 = setTimeout(function() {
        $(".box1-content .text-1,.box1-content .text-5,.box1-content .text-6,.box1-content .text-9").css("opacity", "1")
        clearTimeout(t2)
    }, 800)



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
        } else { //上滚  
        }
        t = p;
    })
    var box3ImgList = [
        //渲染轮播图
        './images/marketing/box3_imgBg_1.png',
        './images/marketing/box3_imgBg_2.png',
        './images/marketing/box3_imgBg_3.png',
        './images/marketing/box3_imgBg_4.png'
    ]
    $(".box3 .swiper-slide").each(function(index) {
        $(this).css("background-image", "url('" + box3ImgList[index] + "')")
    })
    var mySwiper1 = new Swiper('.box3 .swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: true
        },
        effect: 'fade',
        on: {
            slideChangeTransitionStart: function() {
                var index = this.activeIndex
                $(".box3 .box3-swiper-nav .nav").removeClass('nav-cur')
                if (index == 5) {
                    $(".box3 .box3-swiper-nav .nav1").addClass('nav-cur')
                } else if (index == 0) {
                    $(".box3 .box3-swiper-nav .nav4").addClass('nav-cur')
                } else {
                    $(".box3 .box3-swiper-nav .nav" + index).addClass('nav-cur')
                }
            },
        }
    })
    $(".box3 .box3-swiper-nav .nav").hover(function(e) {
        var index = e.currentTarget.dataset.id
        $(".box3 .box3-swiper-nav .nav").removeClass('nav-cur')
        $(".box3 .box3-swiper-nav .nav" + index).addClass('nav-cur')
        mySwiper1.slideTo(index, 1000, false);
    });
})