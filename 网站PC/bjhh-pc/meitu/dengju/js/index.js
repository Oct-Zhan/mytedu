$(function () {
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

