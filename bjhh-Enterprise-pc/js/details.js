$(function(){

    /*公共部分*/
  // $(".headerpage").load("header.html");
  // $(".footerpage").load("footer.html");


  $("#headerpage header").addClass("header2")
  $("#headerpage .logo-box img").attr("src","./images/logo_2.png")
  $("#headerpage .phone-box img").attr("src","./images/icon_phone_3.png")
  /* 滚动事件 顶部导航交互效果 */
  $(window).scroll(function() {
      if ($(document).scrollTop() <= 80) {
          $("#headerpage header").addClass("header2")
          $("#headerpage .logo-box img").attr("src","./images/logo_2.png")
          $("#headerpage .phone-box img").attr("src","./images/icon_phone_3.png")
      }
  });

   //复制文本
   var content = $('.box1 .copyText').text();
   var clipboard = new ClipboardJS('.box1 .copyTextBtn', {
       text: function () {
           return content;
       }
   });
   clipboard.on('success', function (e) {});
   clipboard.on('error', function (e) {
       console.log(e);
   });

   var mySwiper = new Swiper ('.box2 .swiper-container', {
        direction: 'horizontal',
        loop: true,
        speed:1000,
        autoplay: {
        delay: 5000,
        disableOnInteraction: true
        },
        pagination: {
        el: '.box2 .swiper-pagination',
        },
    }) 


    $('.box3-l-item .wx-box .wx-icon').hover(function(){
        $(this).attr('src','./images/icon_weixin_2.png')
        $('.box3-l-item .wx-box .wx-info').show()
    },function(){
        $(this).attr('src','./images/icon_weixin.png')
        $('.box3-l-item .wx-box .wx-info').hide()
    })

    $('.box3-l-item .wb-box img').hover(function(){
        $(this).attr('src','./images/icon_weibo_2.png')
    },function(){
        $(this).attr('src','./images/icon_weibo.png')
    })


})