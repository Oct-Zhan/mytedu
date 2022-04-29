$(function () {

    /*公共部分*/
    // $(".headerpage").load("header.html");
    // $(".footerpage").load("footer.html");
    // $(".asidepage").load("aside.html");


    /* 滚动事件 */
    $(".headerpage .header").addClass("header2")
    $('.headerpage .header .header-logo').attr("src","./images/header2_logo.png")
     $(window).scroll(function() {
        $(".headerpage .header").addClass("header2")
        $('.headerpage .header .header-logo').attr("src","./images/header2_logo.png")
	});


 

}) 