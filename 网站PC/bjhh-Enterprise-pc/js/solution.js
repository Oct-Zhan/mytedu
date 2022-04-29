$(function(){

    /*公共部分*/
   // $(".headerpage").load("header.html");
   // $(".footerpage").load("footer.html");

   var p=0,t=0;
   $(window).scroll(function(e){  
       p = $(this).scrollTop();  
       // console.log(p)
       if(t<=p){//下滚   
           
       }else{//上滚  
       }  
       t = p; 

       if(p > 410){
           $(".nav-box").addClass("nav-box-float")
           $('.list .module-wrap').css('padding-top','151px')
       }else{
           $(".nav-box").removeClass("nav-box-float")
           $('.list .module-wrap').css('padding-top','70px')
       }
   })


   $(".nav-box .nav").click(function(e){
       var index = e.currentTarget.dataset.id
       $('.nav-box .nav').removeClass('nav-cur')
       $('.nav-box .nav'+index).addClass('nav-cur')
       $('.list').css('display','none')
       $('.list'+index).css('display','flex')
       $('html,body').animate({scrollTop:412 + "px"},300);
   })




})