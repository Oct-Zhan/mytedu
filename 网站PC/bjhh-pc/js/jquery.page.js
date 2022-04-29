
(function($) {
    var ms = {
        init: function(obj, args) {
            return (function() {
                ms.fillHtml(obj, args);
                ms.bindEvent(obj, args);
            })();
        },  
        //填充html
        fillHtml: function(obj, args) {
            return (function() {
                obj.empty();
                //上一页
                if (parseInt(parseInt(args.current)) > 1) {
                    obj.append('<a href="javascript:;" class="prevPage"><img src="images/icon3/icon-more-021.png"><img src="images/icon3/icon-more-002.png"></a>');
                } else {
                    obj.remove('.prevPage');
                    obj.append('<span class="disabled"><img src="images/icon3/icon-more-021.png"></span>');
                }
                //中间页码
                if (parseInt(parseInt(args.current)) != 1 && parseInt(parseInt(args.current)) >= 4 && parseInt(args.pageCount) != 4) {
                    obj.append('<a href="javascript:;" class="tcdNumber">' + 1 + '</a>');
                }
                if (parseInt(parseInt(args.current)) - 2 > 2 && parseInt(args.current) <= parseInt(args.pageCount) && parseInt(args.pageCount) > 5) {
                    obj.append('<span>...</span>');
                }
                var start = parseInt(parseInt(args.current)) - 2,
                end =parseInt(parseInt(args.current)) + 2;
                if ((start > 1 && parseInt(args.current) < 4) || parseInt(args.current) == 1) {
                    end++;
                }
                if (parseInt(args.current) > parseInt(args.pageCount) - 4 && parseInt(args.current) >= parseInt(args.pageCount)) {
                    start--;
                }
                for (; start <= end; start++) {

                    if (start <= parseInt(args.pageCount) && start >= 1) {
                        if (start != parseInt(args.current)) {
                            obj.append('<a href="javascript:;" class="tcdNumber">' + start + '</a>');
                        } else {
                            obj.append('<span class="current">' + start + '</span>');
                        }
                    }
                }
                if (parseInt(args.current) + 2 < parseInt(args.pageCount) - 1 && parseInt(args.current) >= 1 && parseInt(args.pageCount) > 5) {
                    obj.append('<span class="ell">...</span>');
                }
                if (parseInt(args.current) != parseInt(args.pageCount) && parseInt(args.current) < parseInt(args.pageCount) - 2 && parseInt(args.pageCount) != 4) {
                    obj.append('<a href="javascript:;" class="tcdNumber">' + parseInt(args.pageCount) + '</a>');
                }
                // 下一页
                if (parseInt(parseInt(args.current)) < parseInt(parseInt(args.pageCount))) {
                    obj.append('<a href="javascript:;" class="nextPage"><img src="images/icon3/icon-more-02.png"><img src="images/icon3/icon-more-002.png"></a>');
                } else {
                    obj.remove('.nextPage');
                    obj.append('<span class="disabled"><img src="images/icon/icon-more-02.png"><img src="images/icon3/icon-more-002.png"></span>');
                }
                obj.append('<span class="goto">&nbsp;共'+parseInt(args.pageCount)+'页&nbsp;&nbsp;到第&nbsp;<input type="text" class="goPage" value="">&nbsp;页&nbsp;&nbsp;<a class="gotodNumber" href="javascript:;">确定</a></span>')
            })();
        },
        //绑定事件
        bindEvent: function(obj, args) {
            return (function() {
                obj.on("click", "a.tcdNumber",
                function() {
                    var current = parseInt($(this).text());
                    ms.fillHtml(obj, {
                        "current": current,
                        "pageCount": parseInt(args.pageCount)
                    });
                    if (typeof(args.backFn) == "function") {
                        args.backFn(current);
                    }
                    scrollTo(0,0);//跳转后返回顶部
                });
                // 上一页
                obj.on("click", "a.prevPage",
                function() {
                    var current = parseInt(obj.children("span.current").text());
                    ms.fillHtml(obj, {
                        "current": current - 1,
                        "pageCount": parseInt(args.pageCount)
                    });
                    if (typeof(args.backFn) == "function") {
                        args.backFn(current - 1);
                    }
                    scrollTo(0,0);//跳转后返回顶部
                });
                // //下一页
                obj.on("click", "a.nextPage",
                function() {
                    var current = parseInt(obj.children("span.current").text());
                    ms.fillHtml(obj, {
                        "current": current + 1,
                        "pageCount": parseInt(args.pageCount)
                    });
                    if (typeof(args.backFn) == "function") {
                        args.backFn(current + 1);
                    }
                    scrollTo(0,0);//跳转后返回顶部
                });
                //页面跳转
                  obj.on("click", "a.gotodNumber",
                function() {
                    if($(".goPage").val().length==0 || $(".goPage").val()==0){
                        var current = 1;
                    }else{
                         var current = parseInt($(".goPage").val());
                    }
                    if(current<=parseInt(args.pageCount)){
	                    ms.fillHtml(obj, {
	                        "current": current ,
	                        "pageCount": parseInt(args.pageCount)
	                    });

	                    if (typeof(args.backFn) == "function") {
	                        $(".goPage").val(current)
	                        args.backFn(current);
	                       }
                  }else{
                	  var errMsg=alertBox("请输入正确页码!");
              		  $('body').append(errMsg);
                  }
                  scrollTo(0,0);//跳转后返回顶部
                });
            })();
        }
    }
    $.fn.createPage = function(options) {
        var args = $.extend({
            pageCount: 10,
            current: 1,
            backFn: function() {}
        },
        options);
        ms.init(this, args);
    }
})(jQuery);
