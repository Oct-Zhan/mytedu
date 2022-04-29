$(function(){
    
    /* 滚动事件 */
    $(window).scroll(function() {
		if ($(document).scrollTop() > 80) {
            $(".headerpage .header").addClass("header2")
			$('.headerpage .header .header-logo').attr("src","./images/header2_logo.png")
		}else {
            $(".headerpage .header").removeClass("header2")
            $('.headerpage .header .header-logo').attr("src","./images/header_logo.png")
		}
	});


      /* 关闭侧边栏 */
      $(".asidepage .close-aside").click(function(){
            $(".asidepage").hide()
      })

      
      /*分页交互效果 */
      $(".pagination .page").click(function(){
            $(".pagination .page").removeClass("page-cur")
            $(this).addClass("page-cur")
      })
    

})