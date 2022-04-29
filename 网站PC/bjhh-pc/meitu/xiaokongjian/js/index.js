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
                    $('.box2 .tap-item' + i).attr('class', 'tap-item tap-item' + i)
                }
                if (this.activeIndex == 4) {
                    $('.box2 .tap-item1').attr('class', 'tap-item tap-item1 cur2')
                } else {
                    $('.box2 .tap-item' + this.activeIndex).attr('class', 'tap-item tap-item' + this.activeIndex + ' cur2')
                }
            },
        }
    })
    $('.box2 .tap-item').click(function(){
        for (var i = 1; i < 4; i++) {
            $('.box2 .tap-item' + i).attr('class', 'tap-item tap-item' + i)
        }
    }) 
    $('.box2 .tap-item1').click(function () {
        $('.box2 .tap-item1').attr('class', 'tap-item tap-item1 cur2')
        mySwiper1.slideTo(1, 1000, false);
    })
    $('.box2 .tap-item2').click(function () {
        $('.box2 .tap-item2').attr('class', 'tap-item tap-item2 cur2')
        mySwiper1.slideTo(2, 1000, false);
    })
    $('.box2 .tap-item3').click(function () {
        $('.box2 .tap-item3').attr('class', 'tap-item tap-item3 cur2')
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
                for (var i = 1; i < 7; i++) {
                    $('.box4 .tap-item' + i).attr('class', 'tap-item tap-item' + i)
                }
                if (this.activeIndex == 7) {
                    $('.box4 .tap-item1').attr('class', 'tap-item tap-item1 cur3')
                } else {
                    $('.box4 .tap-item' + this.activeIndex).attr('class', 'tap-item tap-item' + this.activeIndex + ' cur3')
                }
            },
        }
    })
    $('.box4 .tap-item').click(function(){
        for (var i = 1; i < 7; i++) {
            $('.box4 .tap-item' + i).attr('class', 'tap-item tap-item' + i)
        }
    }) 
    $('.box4 .tap-item1').click(function () {
        $('.box4 .tap-item1').attr('class', 'tap-item tap-item1 cur3')
        mySwiper2.slideTo(1, 1000, false);
    })
    $('.box4 .tap-item2').click(function () {
        $('.box4 .tap-item2').attr('class', 'tap-item tap-item2 cur3')
        mySwiper2.slideTo(2, 1000, false);
    })
    $('.box4 .tap-item3').click(function () {
        $('.box4 .tap-item3').attr('class', 'tap-item tap-item3 cur3')
        mySwiper2.slideTo(3, 1000, false);
    })
    $('.box4 .tap-item4').click(function () {
        $('.box4 .tap-item4').attr('class', 'tap-item tap-item4 cur3')
        mySwiper2.slideTo(4, 1000, false);
    })
    $('.box4 .tap-item5').click(function () {
        $('.box4 .tap-item5').attr('class', 'tap-item tap-item5 cur3')
        mySwiper2.slideTo(5, 1000, false);
    })
    $('.box4 .tap-item6').click(function () {
        $('.box4 .tap-item6').attr('class', 'tap-item tap-item6 cur3')
        mySwiper2.slideTo(6, 1000, false);
    })
});


