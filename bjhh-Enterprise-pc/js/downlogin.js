$(function(){
    $('.box-r-wrap .text-box img').click(function(e){
        var id = e.currentTarget.dataset.id
        if(id == 1){
            $(this).attr('data-id','2')
            $(this).attr('src','./images/icon_13.png')
        }else{
            $(this).attr('data-id','1')
            $(this).attr('src','./images/icon_14.png')
        }
    })

     //自适应 
     $(window).resize(infinite);
     function infinite(){
        var htmlWidth = $('html').width()
         if(htmlWidth >1920 ){
             $('.box-l-wrap').css('width','55%')
             $('.box-r-wrap').css('width','45%')
         }
     }infinite()


     var mySwiper1 = new Swiper ('.success-mask .swiper-container', {
        direction: 'horizontal',
        loop: true,
        speed:1000,
        autoplay: {
          delay: 5000
        },
        effect:'fade',
        pagination: {
          el: '.success-mask  .swiper-pagination'
        }
    })   


})