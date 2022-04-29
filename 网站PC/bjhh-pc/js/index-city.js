$(function(){
    /* 引入公共部分 */
    $('#header-page').load('../public/header1.html',function(){
        $('#header .logo-h1').css("display","inline-block")
        $('#header .logo-h2').hide()
    })
    $('#footer-page').load('../public/footer1.html',function(){
        $('#footer .footer-text1').hide()
        $('#footer .footer-text2').css("display","block")
    })
    $('#jisuanqi-mask-page').load('../public/mask-jisuanqi.html')
    $('#sidebar-page').load('../public/sidebar.html')

    /* banner选择城市 */
    $('body').click(function(){
        $('.city-sele-option').hide()
    })
    $('.city-sele-result').click(function(event){
        $('.city-sele-option').hide()
        $(this).parent().find('.city-sele-option').toggle()
        event.stopPropagation(); 
    })
    $('.city-sele-option p').click(function(){
        $(this).parent().parent().find('.city-sele-result span').text($(this).text())
    })
    $('.province-sele-option p').click(function(){
        $('#province').val($(this).attr('id'));
    })
    $('.city-sele-option p').click(function(){
        $('#city').val($(this).attr('id'));
    })
    $('.index-top-tab span,.index-top-tab i').click(function(){
        $('.hot-city,.city-list').hide()
        $('.index-top-tab span,.index-top-tab i').removeClass('active')
        $(this).addClass('active')
        if($(this)[0].localName=='i'){
            $('.hot-city').show()
        }else{
            $('.city-list').show()
            let index = $(this).index() - 1;
            let dis = 0;
            dis = dis - $('.city-list section').eq(0).height();
            $('.city-list section').eq($(this).index() - 1).prevAll().each(function(i,v){
              dis += $(v).height()
            });  
            $('.city-list').scrollTop(dis);
            $('.city-list').children('section').removeClass('active');
            $('.city-list').children('section').eq(index).addClass('active');
        }
    })

    /* 装修公司排行榜 */
    $('.company-sort-wrap .tab-box .tab').click(function(){
        let index = $(this).index() + 1
        $('.company-sort-wrap .tab-box .tab').removeClass('active')
        $('.company-sort-wrap .list-box').hide()
        $(this).addClass('active')
        $('.company-sort-wrap .list-box'+index).css('display','flex')
    })

    /* 装修房子的步骤 */
    $('.decoration-step-wrap .box .item').hover(function(){
        let imgUrl = $(this).find('img').attr('src').split('.png')[0]
        $(this).find('img').attr('src',imgUrl + '_act.png')
    },function(){
        let imgUrl = $(this).find('img').attr('src').split('_act.png')[0]
        $(this).find('img').attr('src',imgUrl + '.png')
    })

    /* 装修周边 */
    $('.decoration-rim-wrap .list-box .item').hover(function(){
        let imgUrl = $(this).find('.img-box .icon-box .icon').attr('src').split('.png')[0]
        $(this).find('.img-box .icon-box .icon').attr('src',imgUrl + '_act.png')
    },function(){
        let imgUrl = $(this).find('.img-box .icon-box .icon').attr('src').split('_act.png')[0]
        $(this).find('.img-box .icon-box .icon').attr('src',imgUrl + '.png')
    })
    $('.decoration-rim-wrap .list-box .item .text-wrap').hover(function(){
        $(this).find('.text').addClass('text-height')
    },function(){
        $(this).find('.text').removeClass('text-height')
    })


   
    
   

})