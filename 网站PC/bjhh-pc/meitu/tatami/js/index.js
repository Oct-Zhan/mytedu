$(function () {
    /* 引入公共部分 */
    $('#header-page').load('/public/header1.html', function () {
        $('#header .header-top').hide()
    })

    $(window).resize(infinite);
    $('.tab .tab-1').addClass('active')
    var mySwiper = new Swiper ('.swiper-container', {
        preventInteractionOnTransition : false,
        observer: true, 
        observeParents: true,
        direction: 'vertical',  
        slidesPerView :3,
        loop: true, 
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        centeredSlides : true,
        centeredSlidesBounds: true,
        slideToClickedSlide: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            slideChange: function(){
              var index = this.activeIndex -2
              if(index == 6) {
                index = 1
              }
              if(index == 7) {
                index = 2
              }
              if(index == 0) {
                index = 5
              }
             $('.news-info .img-box-info img').attr('src', './images/new' + index + '.png')
            }
        }

    })
    function infinite() {
        var htmlWidth = $('html').width();
        if (htmlWidth > 1920) {
            $("html").css({
                "font-size": 30 / 1920 * htmlWidth + "px"
            });
        } else {
        }
    }
    infinite();
});

function tapClick(index) {
    $('.tab .tab-' + index).addClass('active').siblings().removeClass('active')
    $('.tab-img img').attr('src', './images/tab-' + index + '.png')
    if (index == 1) {
        $('.tab-img a').attr('href', 'http://www.bao315.com/fangwu/279664.html')
    } else if (index == 2) {
        $('.tab-img a').attr('href', 'http://www.bao315.com/fangwu/279696.html')

    } else if (index == 3) {
        $('.tab-img a').attr('href', 'http://www.bao315.com/fangwu/279705.html')
    }
}

