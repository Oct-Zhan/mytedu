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
    $('.box4-container .btn .btn-content').click(function(){
        $('.box4-container .btn').css('background-image',"url('./images/img_btn_3.png')")
        $(this).parent('.btn').css('background-image',"url('./images/img_btn_2.png')")
    })
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', 
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable :true
        }
    })
});
function tapClick(index){
    $('.box4-container .list').hide()
    $('.box4-container .list' + index).show()
}
function imgClick(index,obj,type){
    var thisObj = $(obj)
    if(type == 'zt'){
        $('.content3 .img-item').attr('class','img-item')
        thisObj.parent().attr('class','img-item img-item-cur')
        thisObj.parent().parent().parent().parent().parent().find('.left-img').attr('src','./images/img_zt_' + index + '.png')
    }else if( type == 'sd'){
        $('.content2 .img-item').attr('class','img-item')
        thisObj.parent().attr('class','img-item img-item-cur')
        thisObj.parent().parent().parent().parent().parent().find('.left-img').attr('src','./images/img_sd_' + index + '.png')
    }else{
        $('.content1 .img-item').attr('class','img-item')
        thisObj.parent().attr('class','img-item img-item-cur')
        thisObj.parent().parent().parent().parent().parent().find('.left-img').attr('src','./images/img_dp_' + index + '.png')
    }
}


