$(function () {
    /* 引入公共部分 */
    $('#header-page').load('/public/header1.html', function () {
        $('#header .header-top').hide()
    })

    $(window).resize(infinite);
    function infinite() {
        var htmlWidth = $('html').width();
        if (htmlWidth > 1920) {
            $("html").css({
                "font-size": 30 / 1920 * htmlWidth + "px"
            });
        } else {
        }
    } infinite();
    var mySwiper1 = new Swiper('#mySwiper1', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        on: {
            slideChangeTransitionStart: function () {
                for (var i = 1; i < 4; i++) {
                    $('.box3 .tap-item' + i).attr('class', 'tap-item tap-item' + i)
                }
                if (this.activeIndex == 4) {
                    $('.box3 .tap-item1').attr('class', 'tap-item tap-item1 cur2')
                }else if(this.activeIndex == 0){
                    $('.box3 .tap-item3').attr('class', 'tap-item tap-item3 cur2')
                } else {
                    $('.box3 .tap-item' + this.activeIndex).attr('class', 'tap-item tap-item' + this.activeIndex + ' cur2')
                }
            },
        }
    })
    $('.box3 .tap-item').click(function () {
        for (var i = 1; i < 4; i++) {
            $('.box3 .tap-item' + i).attr('class', 'tap-item tap-item' + i)
        }
    })
    $('.box3 .tap-item1').click(function () {
        $(this).attr('class', 'tap-item tap-item1 cur2')
        mySwiper1.slideTo(1, 1000, false);
    })
    $('.box3 .tap-item2').click(function () {
        $(this).attr('class', 'tap-item tap-item2 cur2')
        mySwiper1.slideTo(2, 1000, false);
    })
    $('.box3 .tap-item3').click(function () {
        $(this).attr('class', 'tap-item tap-item3 cur2')
        mySwiper1.slideTo(3, 1000, false);
    })
    var mySwiper2 = new Swiper('#mySwiper2', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        on: {
            slideChangeTransitionStart: function () {
                for (var i = 1; i < 5; i++) {
                    $('.box5 .tap-item' + i).attr('class', 'tap-item tap-item' + i)
                }
                if (this.activeIndex == 5  ) {
                    $('.box5 .tap-item1').attr('class', 'tap-item tap-item1 cur3')
                } else if(this.activeIndex == 0){
                    $('.box5 .tap-item4').attr('class', 'tap-item tap-item4 cur3')
                }else {
                    $('.box5 .tap-item' + this.activeIndex).attr('class', 'tap-item tap-item' + this.activeIndex + ' cur3')
                }
            },
        }
    })
    $('.box5 .tap-item').click(function () {
        for (var i = 1; i < 5; i++) {
            $('.box5 .tap-item' + i).attr('class', 'tap-item tap-item' + i)
        }
    })
    $('.box5 .tap-item1').click(function () {
        $(this).attr('class', 'tap-item tap-item1 cur3')
        mySwiper2.slideTo(1, 1000, false);
    })
    $('.box5 .tap-item2').click(function () {
        $(this).attr('class', 'tap-item tap-item2 cur3')
        mySwiper2.slideTo(2, 1000, false);
    })
    $('.box5 .tap-item3').click(function () {
        $(this).attr('class', 'tap-item tap-item3 cur3')
        mySwiper2.slideTo(3, 1000, false);
    })
    $('.box5 .tap-item4').click(function () {
        $(this).attr('class', 'tap-item tap-item4 cur3')
        mySwiper2.slideTo(4, 1000, false);
    })
});


