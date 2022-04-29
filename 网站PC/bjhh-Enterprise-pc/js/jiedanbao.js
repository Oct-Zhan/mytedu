$(function(){

    /*公共部分*/
    // $(".headerpage").load("header.html");
    // $(".footerpage").load("footer.html");

    var p=0,t=0;
    $(window).scroll(function(e){  
        p = $(this).scrollTop();  
        // console.log(p)
        if(t<=p){//下滚   
            if(p>300){
                if(!$(".list1 .box2 .title-box .title").hasClass("animate__animated")){
                    $(".list1 .box2 .title-box .title,.list1 .box2 .title-box .subtitle,.list1 .box2-content .item-box").addClass("animate__animated animate__fadeInUp")
                    $(".list1 .box2 .title-box .subtitle").addClass("animate__delay-03s")
                    $(".list1 .box2-content .item-box").addClass("animate__delay-06s")
                }
            }
        }else{//上滚  
        }  
        t = p; 

        if(p > 410){
            $(".tab-box").addClass("tab-box-float")
        }else{
            $(".tab-box").removeClass("tab-box-float")
        }
    })


    function cutText(index){
        $(".list1 .box3-content .item-box .item-box-c1").show()
        $(".list1 .box3-content .item-box .item-box-c2").hide()
        $(".list1 .box3-content .item-box" + index + " .item-box-c1").hide()
        $(".list1 .box3-content .item-box" + index + " .item-box-c2").show()
    } cutText(1)
    var i =2
    var t1 = setInterval(() => {
        if(i==7){
            i=1
            cutText(i)
        }else{
            cutText(i)
        }
        i++
    }, 5000);
    $(".list1 .box3-content .item-box").hover(function(e){
        clearInterval(t1)
        var index = e.currentTarget.dataset.index
        cutText(index)
    })


    function mySwiper1(){
        var mySwiper1 = new Swiper ('.list1 .box5 .swiper-container', {
            direction: 'vertical',
            loop: true,
            slidesPerView:10,
            speed:1000,
            autoplay: {
              delay: 5000
            }
        })    
    }mySwiper1()
    function mySwiper2(){
        var mySwiper2 = new Swiper ('.list1 .box6 .swiper-container', {
            direction: 'vertical',
            loop: true,
            slidesPerView:3,
            speed:1000,
            autoplay: {
              delay: 5000
            }
        })   
    } mySwiper2()
    function mySwiper3(){
        var mySwiper3 = new Swiper ('.list2 .box4 .swiper-container', {
            direction: 'vertical',
            loop: true,
            speed:1000,
            autoplay: {
              delay: 5000,
              disableOnInteraction: true
            },
            on: {
                slideChangeTransitionStart: function(){
                    var index = this.activeIndex
                    $(".list2 .box4 .nav  img").hide()
                    $(".list2 .box4  .swiper-box .img-num").hide()
                    if(index == 9){
                        $(".list2 .box4 .nav1 img").show()
                        $(".list2 .box4  .swiper-box .img-num1").show()
                    }else if(index == 0){
                        $(".list2 .box4 .nav8 img").show()
                        $(".list2 .box4  .swiper-box .img-num8").show()
                    }else{
                        $(".list2 .box4 .nav" + index +" img").show()
                        $(".list2 .box4  .swiper-box .img-num"+index).show()
                    }
                },
            }
    
        }) 
        $(".list2 .box4 .nav").hover(function(e){
            var index = e.currentTarget.dataset.index
            $(".list2 .box4 .nav  img").hide()
            $(".list2 .box4  .swiper-box .img-num").hide()
            $(".list2 .box4 .nav" + index +" img").show()
            $(".list2 .box4  .swiper-box .img-num"+index).show()
            mySwiper3.slideTo(index, 1000, false);
        })
    }
    function mySwiper4(){
        var mySwiper4 = new Swiper ('.list2 .box6 .swiper-container', {
            direction: 'horizontal',
            loop: true,
            speed:1000,
            autoplay: {
              delay: 5000,
              disableOnInteraction: true
            },
            pagination: {
             el: '.list2 .box6 .swiper-pagination',
            },
        }) 
    }
    function mySwiper5(){
        var mySwiper5 = new Swiper ('.list2 .box2 .swiper-container', {
            direction: 'horizontal',
            loop: true,
            speed:1000,
            autoplay: {
              delay: 5000,
              disableOnInteraction: true
            },
            pagination: {
             el: '.list2 .box2 .swiper-pagination',
            },
        }) 
    }
    

    $(".tab-box .tab").click(function(e){
        var id = e.currentTarget.dataset.id
        $(".tab-box .tab").removeClass("tab-cur")
        $(this).addClass("tab-cur")
        $(".list").css("display","none")
        $(".list"+id).css("display","flex")
        $('html,body').animate({scrollTop: 410 + "px"},300);
        if(id==1){
            i=1
            cutText(1)
            mySwiper1()
            mySwiper2()
        }else{
            mySwiper3()
            mySwiper4()
            mySwiper5()
        }
    })


})