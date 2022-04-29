$(function () {
    /* 引入公共部分 */
    $('#header-page').load('../public/header1.html',function(){
        $('#header .logo-h1').css("display","inline-block")
        $('#header .logo-h2').hide()
    })
    $('#footer-page').load('../public/footer1.html')
    $('#mfsj-mask-page').load('../public/mask-mfsj.html')
    $('#agreement-mask-page').load('../public/mask-agreement.html')
    $('#msg-mask-page').load('../public/mask-msg.html')
    $('#img-mask-page').load('../public/mask-img.html')
    $('#jisuanqi-mask-page').load('../public/mask-jisuanqi.html')
    $('#sidebar-page').load('../public/sidebar.html')

    /* banner轮播 */
    var bannerSwiper = new Swiper('#banner-swiper', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '#banner-swiper .swiper-button-next',
            prevEl: '#banner-swiper .swiper-button-prev',
        }
    })

    /* 显示免费设计弹窗 */
    $('.five-cost-wrap .five-cost-content .item,.company-rank-wrap .rank-text-btn').click(function () {
        $('.mfsj-mask-box').css('display', 'flex')
    })

    /* 装修公司排行榜banner */
    var companyRankSwiper = new Swiper('#company-rank-swiper', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        }
    })

    /* 装修公司排行榜 滑动验证 */
    // slideVerify.resetVerify();可以重置插件回到初始状态 
    var slideVerifyVal2 = false
    var SlideVerifyPlug = window.slideVerifyPlug;
    var slideVerify2 = new SlideVerifyPlug('#verify-wrap2', {
        wrapWidth: '462',
        initText: '按住滑块向右拖动',
        sucessText: '验证通过',
        getSuccessState: function (res) {
            slideVerifyVal2 = res
        }
    });

    /* 显示营业执照弹窗 */
    $('.company-rank-wrap .license').click(function () {
        $('.img-mask-box').css('display', 'flex')
    })

    /* 空间效果图轮播 */
    var spaceSwiper = new Swiper('#space-swiper', {
        direction: 'horizontal',
        loop: true,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false
        // },
        slidesPerView: 2.31,
        slidesOffsetBefore: 200,
        spaceBetween: 23,
        centeredSlides: true,
        navigation: {
            nextEl: '#space-swiper .swiper-button-next',
            prevEl: '#space-swiper .swiper-button-prev',
        },
        on: {
            slideChangeTransitionStart: function () {
                let activeIndex = this.activeIndex - 2
                let arr = $('#space-swiper .spatial-datails-box .spatial-btn-con')
                let length = arr.length
                arr.hide()
                if (activeIndex > length) {
                    arr.eq(0).show()
                } else if (activeIndex == 0) {
                    arr.eq(length - 1).show()
                } else {
                    arr.eq(activeIndex - 1).show()
                }
            },
        },
    })


    /* 主流风格设计师头像替换 */
    $('.decoration-effect-wrap .list .item').hover(function () {
        let src = $(this).find('.pic-head').attr('src').split('.png')[0]
        $(this).find('.pic-head').attr('src', src + '_act.png')
    }, function () {
        let src = $(this).find('.pic-head').attr('src').split('_act.png')[0]
        $(this).find('.pic-head').attr('src', src + '.png')
    })

    /* 主流风格轮播 */
    var decorationSwiper = new Swiper('#decoration-swiper', {
        direction: 'horizontal',
        loop: true,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false
        // },
        pagination: {
            el: '#decoration-swiper .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#decoration-swiper .swiper-button-next',
            prevEl: '#decoration-swiper .swiper-button-prev',
        }
    })

    /* 厦门装修案例轮播 */
    var decorationCaseSwiper = new Swiper('#decoration-case-swiper', {
        direction: 'horizontal',
        loop: true,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false
        // },
        navigation: {
            nextEl: '#decoration-case-swiper .swiper-button-next',
            prevEl: '#decoration-case-swiper .swiper-button-prev',
        },
        on: {
            slideChangeTransitionStart: function () {
                let activeIndex = this.activeIndex
                let arr = $('.decoration-case-wrap .swiper-box .tab-box .item')
                let length = arr.length
                arr.removeClass('active')
                if (activeIndex == 7) {
                    arr.eq(0).addClass('active')
                } else if (activeIndex == 0) {
                    arr.eq(length - 1).addClass('active')
                } else {
                    arr.eq(activeIndex - 1).addClass('active')
                }
            },
        },
    })
    $('.decoration-case-wrap .swiper-box .tab-box .item').click(function (e) {
        let id = e.currentTarget.dataset.id
        decorationCaseSwiper.slideTo(id, 1000, false);
        $('.decoration-case-wrap .swiper-box .tab-box .item').removeClass('active')
        $(this).addClass('active')
    })


    /* 看攻略 */
    $('.look-offensive-wrap .left-tab-box .item .tab-list').slideUp()
    $('.look-offensive-wrap .left-tab-box .item .tab-list').eq(0).slideDown(function(){
        $('.look-offensive-wrap .look-offensive-left .tab-item').click(function (e) {
            let tabId = e.currentTarget.dataset.id
            $('.look-offensive-wrap .look-offensive-left .tab-item').removeClass('active')
            $(this).addClass('active')
            $('.look-offensive-wrap  .right-content').hide()
            $('.look-offensive-wrap  .right-content' +  '1-' + tabId).show()
        })
    })
    $('.look-offensive-wrap .left-tab-box .item .title').click(function (e) {
        let titleId = e.currentTarget.dataset.id
        if (!$(this).parent().hasClass("active")) {
            let arr = $('.look-offensive-wrap .left-tab-box .item')
            let tabList = $('.look-offensive-wrap .left-tab-box .item .tab-list')
            let thisTabList = $(this).parent().find('.tab-list')
            arr.removeClass('active')
            tabList.find('.tab-item').removeClass('active')
            $(this).parent().addClass('active')
            thisTabList.find('.tab-item').eq(0).addClass('active')
            $('.look-offensive-wrap  .right-content').hide()
            $('.look-offensive-wrap  .right-content' + titleId + '-1').show()
            tabList.slideUp()
            thisTabList.slideDown()
        }
        $('.look-offensive-wrap .look-offensive-left .tab-item').click(function (e) {
            let tabId = e.currentTarget.dataset.id
            $('.look-offensive-wrap .look-offensive-left .tab-item').removeClass('active')
            $(this).addClass('active')
            $('.look-offensive-wrap  .right-content').hide()
            $('.look-offensive-wrap  .right-content' + titleId + '-' + tabId).show()
        })
    })

    /* 看视频 */
    $('.look-video-wrap .video-box').click(function (event) {
        event.preventDefault();
        let video = $('.look-video-wrap .video-box .video')[0]
        let playIcon = $('.look-video-wrap .video-box .ico-play')
        if (video.paused) { //视频暂停中
            playIcon.hide()
            video.play()
        } else { //视频播放
            playIcon.show()
            video.pause()
        }
    })

    /* 抢免费设计 */
    var slideVerifyVal3 = false
    var SlideVerifyPlug = window.slideVerifyPlug;
    var slideVerify3 = new SlideVerifyPlug('#verify-wrap3', {
        wrapWidth: '242',
        initText: '按住滑块向右拖动',
        sucessText: '验证通过',
        getSuccessState: function (res) {
            slideVerifyVal3 = res
        }
    });
    var proprietorSwiper = new Swiper('#proprietor-swiper', {
        direction: 'vertical',
        loop: true,
        autoplay: {
            delay: 3000
        },
        slidesPerView : 6.49
    })
    var newCompanySwiper = new Swiper('#new-company-swiper', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 3000
        },
        slidesPerView : 2
    })

    /* 装修公司ceo轮播 */
    var companyCeoSwiper = new Swiper('#company-ceo-swiper', {
        direction: 'vertical',
        loop: true,
        autoplay: {
            delay: 3000
        },
        slidesPerView : 2
    })

    /* 了解保驾护航轮播 */
    var knowCompanySwiper = new Swiper('#know-company-swiper', {
        direction: 'horizontal',
        loop: true,
        // autoplay: {
        //     delay: 3000
        // },
        slidesPerView : 3,
        navigation: {
            nextEl: '#know-company-swiper .swiper-button-next',
            prevEl: '#know-company-swiper .swiper-button-prev',
        },
    })





})