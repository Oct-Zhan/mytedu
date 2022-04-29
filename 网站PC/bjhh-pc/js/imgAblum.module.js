var $leftBoundary = 0;
var $rightBoundary = 4;
var $moveUnit = 156;
$(function () {
    // 点击略缩图事件
    $(".img-thumbs-ul li").click(function () {
        var img = $(this).find("img");
        var index = parseInt($(this).index());
        setBigImg({
            index: index
        });
    });
    // 点击上一张
    $(".img-pre").click(function () {
        var index = parseInt($(".img-big").attr("index"));
        if (index != undefined && index > 0) {
            setBigImg({
                index: index - 1
            });
        } else {
            if (preImgAlbumId != null && preImgAlbumId != 0) {
                var url = $sitexiaoguo + "/c" + preImgAlbumId;
                if (tagId != null && tagId != undefined && tagId != "") {
                    url = $sitexiaoguo + "/c" + preImgAlbumId + "_" + tagId;
                }
                location.href = url;
            } else {
                $.myBox.alert("提示", "没有上一张了!");
            }
        }
    });
    // 点击下一张
    $(".img-next").click(function () {
        var index = parseInt($(".img-big").attr("index"));
        var lis = $(".img-thumbs-ul li");
        if (index != undefined && lis != undefined && index < lis.length - 1) {
            setBigImg({
                index: index + 1
            });
        } else {
            if (nextImgAlbumId != null && nextImgAlbumId != 0) {
                var url = $sitexiaoguo + "/c" + nextImgAlbumId;
                if (tagId != null && tagId != undefined && tagId != "") {
                    url = $sitexiaoguo + "/c" + nextImgAlbumId + "_" + tagId;
                }
                location.href = url;
            } else {
                $.myBox.alert("提示", "没有下一张了!");
            }
        }
    });
    // 点击上一张
    $(".img-pre-big").click(function () {
        var index = parseInt($(".img-big").attr("index"));
        if (index != undefined && index > 0) {
            setBigImg({
                index: index - 1
            });
        } else {
            if (preImgAlbumId != null && preImgAlbumId != 0) {
                var url = $sitexiaoguo + "/c" + preImgAlbumId;
                if (tagId != null && tagId != undefined && tagId != "") {
                    url = $sitexiaoguo + "/c" + preImgAlbumId + "_" + tagId;
                }
                location.href = url;
            } else {
                $.myBox.alert("提示", "没有上一张了!");
            }
        }
    });
    // 点击下一张
    $(".img-next-big").click(function () {
        var index = parseInt($(".img-big").attr("index"));
        var lis = $(".img-thumbs-ul li");
        if (index != undefined && lis != undefined && index < lis.length - 1) {
            setBigImg({
                index: index + 1
            });
        } else {
            if (nextImgAlbumId != null && nextImgAlbumId != 0) {
                var url = $sitexiaoguo + "/c" + nextImgAlbumId;
                if (tagId != null && tagId != undefined && tagId != "") {
                    url = $sitexiaoguo + "/c" + nextImgAlbumId + "_" + tagId;
                }
                location.href = url;
            } else {
                $.myBox.alert("提示", "没有下一张了!");
            }
        }
    });
    var l = $(".img-thumbs-ul li").length;
    if (l >= 7) {
        l = 3
    } else if (l > 1 && l < 7) {
        l = Math.ceil(l / 2) - 1;
    } else {
        l = 0;
    }
    // 初始化第一张图片
    setBigImg({
        index: l
    });
});

// 修改URL不跳转
function replaceUrl(name, value) {
    var obj = new Object();
    obj[name] = value;
    obj.rand = Math.random();
    history.replaceState(obj, '', value);
}

// 移动UL
function moveUl(data) {
    // 左移动
    if (data.index > $rightBoundary) {
        $rightBoundary = data.index;
        $leftBoundary = $leftBoundary + 1;
        var left = $(".img-thumbs-ul").css("left");
        left = parseInt(left.substring(0, left.lastIndexOf("px")));
        $(".img-thumbs-ul").css("left", left - $moveUnit);
    }
    // 右移动
    if (data.index < $leftBoundary) {
        $leftBoundary = data.index;
        $rightBoundary = $rightBoundary - 1;
        var left = $(".img-thumbs-ul").css("left");
        left = parseInt(left.substring(0, left.lastIndexOf("px")));
        $(".img-thumbs-ul").css("left", left + $moveUnit);
    }
}

// 设置大图
function setBigImg(data) {
    moveUl(data);
    var li = $(".img-thumbs-ul li")[data.index];
    $(".img-thumbs-ul li").removeClass("img-thumb-active");
    $(li).addClass("img-thumb-active");
    var img = $(li).find("img");
    var pid = img.attr("pid");
    var imgUrl = img.attr("src");
    var imgTitle = img.attr("title");
    var imgTime = img.attr("time");
    var imgTags = getImgTags(li);
    var imgDes = img.attr("des");
    setImgTags(imgTags);

    // 设置当前图片标题
    $("#imgTitle").html(imgTitle);
    $("#imgTime").html(imgTime + "上传");
    $("#imgDes").html(imgDes);
    // 设置当前大图
    $(".img-big").attr("index", data.index);
    $(".img-big").find("img").attr("src", imgUrl);

    var imgSrc = $(".big-imgInfo").attr("src");

    getImageWidth(imgSrc,function(w,h){
        // console.log({width:w,height:h});
    });
    var imgType =imgSrc.substr(0, imgSrc.indexOf("?")).slice(-3);
    // console.log(imgType)

//$(".curPosi").find("span").text(imgTitle);
//	$(document).attr("title",imgTitle);
//	replaceUrl(pid, "p"+pid+".html");
}

function getImageWidth(url,callback){
    var imgA = new Image();
    imgA.src = url;
    // 如果图片被缓存，则直接返回缓存数据
    if(imgA.complete){
        callback(imgA.width, imgA.height);
    }else{
        imgA.onload = function(){
            callback(imgA.width, imgA.height);
        }
    }
}
// 获取标签
function getImgTags(li) {
    var imgTags = "";
    var tagInputs = $(li).find("input[name='imgLabel']");
    tagInputs.each(function (i, item) {
        var labelName = $(item).attr("labelName");
        var mark = $(item).val();
        imgTags = imgTags + labelName + "," + mark + ";";
    });
    if (imgTags.length > 0) {
        imgTags = imgTags.substring(0, imgTags.length - 1);
    }
    return imgTags;
}

// 设置标签
function setImgTags(imgTags) {
    if (imgTags != undefined && imgTags.indexOf(",") != -1) {
        var tags = imgTags.split(";");
        var html = "";
        for (var i = 0; i < tags.length; i++) {
            var tag = tags[i];
            if (tag != null && tag.indexOf(",") != -1) {
                var t = tag.split(",");
                html = html + "<a href='" + $sitexiaoguo + "/" + t[1] + "'>" + t[0] + "</a>";
            }
        }
        $(".img-tags").html(html);
    }
}
