$(function () {
    /* 引入公共部分 */
    $('#header-page').load('/public/header1.html', function () {
      $('#header .header-top').hide()
    })

    $(window).resize(infinite);
    $('.tab .tab-1').css({
        'background': 'url("./images/tab-a.png")'
    })
    $('.btn-img-info-1').hide()
    function infinite() {
        var htmlWidth = $('html').width();
        if (htmlWidth > 1920) {
            $("html").css({
                "font-size": 30 / 1920 * htmlWidth + "px"
            });
        } else {
        }
    } infinite();
});

function tapClick(index) {
    $('.tab .tab-'+index).css({
        'background': 'url("./images/tab-a.png")'
    }).siblings().css({
        'background': 'url("./images/tab-bg.png")'
    })
    $('.tab-img img').attr('src', './images/tab-' + index + '.png')
    if (index == 1) {
        $('.tab-img a').attr('href', 'http://www.bao315.com/fangwu/290202.html')
    } else if (index == 2) {
        $('.tab-img a').attr('href', 'http://www.bao315.com/article/281588.html')

    } else if (index == 3) {
        $('.tab-img a').attr('href', 'http://www.bao315.com/fangwu/274297.html')

    } else {
        $('.tab-img a').attr('href', 'http://www.bao315.com/article/277953.html')

    }
}

function btnClick() {
    $('.btn-img-info img').toggle()
}
