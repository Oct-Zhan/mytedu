$(function() {
    var p = 0,
        t = 0;
    $(window).scroll(function(e) {
        p = $(this).scrollTop();
        if (t <= p) { //下滚   

        } else { //上滚  
        }
        t = p;
        if (p > 410) {
            $(".tab-box").addClass("tab-box-float")
            $('.list .module-wrap').css('padding-top', '151px')
        } else {
            $(".tab-box").removeClass("tab-box-float")
            $('.list .module-wrap').css('padding-top', '70px')
        }
    })


    $(".tab-box .tab").click(function(e) {
        var id = e.currentTarget.dataset.id
        $(".tab-box .tab").removeClass("tab-cur")
        $(this).addClass("tab-cur")
        $(".list").css("display", "none")
        $(".list" + id).css("display", "flex")
        $('html,body').animate({ scrollTop: 410 + "px" }, 300);
    })





})