$(function(){

    /*公共部分*/
    // $(".headerpage").load("header.html");
    // $(".footerpage").load("footer.html");

    var windowHeight = $(window).height()
    if(windowHeight > 700){
        if(!$(".box1-content .img").hasClass("animate__animated")){
            $(".box1-content .img").addClass('animate__animated animate__bounceIn')
        } 
    }
    var p=0,t=0;
    $(window).scroll(function(e){  
        p = $(this).scrollTop();  
        // console.log(p)
        if(t<=p){//下滚  
            if(windowHeight <= 700){
                if(p>100){
                    if(!$(".box1-content .img").hasClass("animate__animated")){
                        $(".box1-content .img").addClass('animate__animated animate__bounceIn')
                    } 
                }
            } 
            if(p>5100){
                if(!$(".box10 .title-box").hasClass("animate__animated")){
                    $('.box10 .title-box').addClass("animate__animated animate__fadeInUp")
                    $('.box10 .box10-nav').addClass('animate__animated animate__fadeInRight')
                    $('.box10 .swiper-container').addClass('animate__animated animate__fadeInUp')
                    mySwiper()
                }
            }

        }else{//上滚  
        }  
        t = p; 
    })
    var t1 = setTimeout(function(){
        $(".box1-content .text2,.box1-content .text5,.box1-content .text8,.box1-content .text11").css("opacity","1")
        clearTimeout(t1)
    },600)
    var t2 = setTimeout(function(){
        $(".box1-content .text1,.box1-content .text6,.box1-content .text7,.box1-content .text12").css("opacity","1")
        clearTimeout(t2)
    },800)


    $(".box2 .item").hover(function(){
        $(this).find('.item1').css('display','none')
        $(this).find('.item2').css('display','flex')
    },function(){
        $(this).find('.item2').css('display','none')
        $(this).find('.item1').css('display','flex')
    })


    function mySwiper(){
        var mySwiper = new Swiper ('.box10 .swiper-container', {
            direction: 'horizontal', 
            loop: true,
            speed:800,
            effect : 'coverflow',
            autoplay: {
                delay: 5000,
                disableOnInteraction: true
            }
          })  
          $(".box10  .nav").hover(function(e){
            var index = e.currentTarget.dataset.id
            mySwiper.slideTo(index, 1000, false);
        })      
    }
    

})