$(function () {

    /*公共部分*/
    // $(".headerpage").load("header.html");
    // $(".footerpage").load("footer.html");
    // $(".asidepage").load("aside.html");

    /* 解决方案交互效果 */
    $(".case-item").hover(function(){
       $(this).css("box-shadow"," 0 5px 10px 3px #ECECEE") 
       $(this).find(".text-box").css({"padding-left":"20px","border-bottom":"0"})
       $(this).find(".text-box img").attr("src","./images/icon_2.png")
    },function(){
       $(this).css("box-shadow","none") 
       $(this).find(".text-box").css({"padding-left":"0","border-bottom":"1px solid #E5E5E5"})
       $(this).find(".text-box img").attr("src","./images/icon_1.png")
    })


    /* 客户案例交互效果 */
    $(".client-case").hover(function(){
       $(this).css({"box-shadow":" 0 5px 10px 3px #ECECEE","border":"0","padding-top":"9px"}) 
       $(this).find(".text-box img").attr("src","./images/icon_2.png")
    },function(){
       $(this).css({"box-shadow":"none","border":"1px solid #F2F2F2","padding-top":"8px"}) 
       $(this).find(".text-box img").attr("src","./images/icon_1.png")
    })


    /* 实力保障交互效果 */
    $('.strength-item').hover(function(e){
        var strengthId = e.currentTarget.dataset.id
        $(this).css("background-image","linear-gradient(to right,#5590FF,#3272FF)")
        $(this).find(".text-box .title,.text-box .text").css("color","#ffffff")
        $(this).find("img").attr("src","./images/index/strength_icon_sel_"+strengthId+".png")
    },function(e){
        var strengthId = e.currentTarget.dataset.id
        $(this).css("background-image","none")
        $(this).find(".text-box .title").css("color","#333333")
        $(this).find(".text-box .text").css("color","#666666")
        $(this).find("img").attr("src","./images/index/strength_icon_"+strengthId+".png")
    })


    /* 关闭提交成功弹窗 */
    $(".submit-succeed-mask button").click(function(){
      $(".submit-succeed-mask").hide()
    })



})