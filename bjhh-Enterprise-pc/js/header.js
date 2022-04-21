$(function(){
    $(".download-box .text").hover(function(){
        $(this).parent().find("img").show()
    },function(){
        $(this).parent().find("img").hide()
    })
})