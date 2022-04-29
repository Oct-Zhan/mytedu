$(function(){
    
    
    /* 选择协议 */
    $('.agreement-box .img').click(function (e) {
        let id = e.currentTarget.dataset.id
        if (id == 1) {
            $(this).attr({ 'src': '../images/icon1/ico_sel_no.png', 'data-id': '2' })
        } else {
            $(this).attr({ 'src': '../images/icon1/ico_sel.png', 'data-id': '1' })
        }
    })

    /* 查看协议 */
    $('.agreement-box .agreement-item').click(function (e) {
        let id = e.currentTarget.dataset.agreement
        if (id == 1) { //用户协议
            $('.agreement-mask-wrap iframe').attr('src', 'https://m.bao315.com/activity/privacy3.html')
        } else if (id == 2) { //隐私政策
            $('.agreement-mask-wrap iframe').attr('src', 'https://m.bao315.com/activity/privacy.html')
        } else { //共享说明
            $('.agreement-mask-wrap iframe').attr('src', 'https://m.bao315.com/activity/privacy2.html')
        }
        $('.agreement-mask-wrap').css('display','flex')
    })



})