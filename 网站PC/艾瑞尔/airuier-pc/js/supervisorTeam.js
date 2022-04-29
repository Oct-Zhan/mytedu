$(function(){
    
    /*公共部分*/
    // $(".headerpage").load("header.html");
    // $(".footerpage").load("footer.html");
    // $(".asidepage").load("aside.html");

    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        effect : 'fade',
        noSwiping: true,
        loop: true
    }) 
    $(".team-nav").hover(function(e){
        $(".team-nav").removeClass("team-nav-cur")
        $(this).addClass("team-nav-cur")
        var id = e.currentTarget.dataset.index
        mySwiper.slideTo(id, 500, false);
     })

})