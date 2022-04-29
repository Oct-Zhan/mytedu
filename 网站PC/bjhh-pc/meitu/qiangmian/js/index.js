$(function () {
    /* 引入公共部分 */
    $('#header-page').load('/public/header1.html', function () {
        $('#header .header-top').hide()
    })
    
    $(window).resize(infinite);
    function infinite() {
        var htmlWidth = $('html').width();
           if(htmlWidth > 1920){
                $("html").css({
                    "font-size": 30 / 1920* htmlWidth + "px"
                });
           }else{
           }
    } infinite();
});

