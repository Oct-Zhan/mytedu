$(function () {

    /*公共部分*/
    // $(".headerpage").load("header.html");
    // $(".footerpage").load("footer.html");
    // $(".asidepage").load("aside.html");


    /* 解决方案交互效果 */
    $(".solution-item").hover(function(){
       $(this).find(".more-btn").attr("src","./images/icon_2.png")
    },function(){
        $(this).find(".more-btn").attr("src","./images/icon_1.png")
    })



})