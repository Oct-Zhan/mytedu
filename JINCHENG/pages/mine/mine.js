// pages/mine/mine.js
Page({
  tap_ch:function(){
    if (this.data.open) {
      this.setData({
        open:false
      });
    }else{
      this.setData({
        open:true
      });
    }
  },
  data:{
    open: false,
    isShow: false,//显示隐藏
    condition: true,
    animation: {},
    meglist:[
      { imag:'/icon/lx_phone.png',megss:'热线：18100533119'},
      { imag:'/icon/lx_qq.png',megss:'QQ：6935119'},
      { imag:'/icon/lx_email.png',megss:'邮箱：6935119@qq.com'},
      { imag:'/icon/lx_home.png',megss:'地址：福建省泉州市安溪镇玉田开发区福洋工业园1栋'},
    ]
  },
  onLoad: function (options) {

  },
  isShow() {
    this.setData({
      isShow: true
    });
    setTimeout(() => {
      //动画部分
      if (!this.animation) {
        // 创建一个默认动画组执行时间为1秒的动画
        const animation = tt.createAnimation({
          duration: 1000,//动画持续多少毫秒
          timingFunction: "linear",//‘运动方式’
          delay: 0//多久后动画开始运行
        });
        this.animation = animation;//赋值动画
      }
      this.animation.translate(-100, 0).step();//X轴不偏移，step:动画完成
      // 应用第1个动画组
      this.setData({
        animationData: this.animation.export(),//导出、储存
      });
    }, 100)
  },
  //第二个动画
  isCover() {
    //修改参数
    var that = this
    this.animation.translate(0, 0).step();
    this.setData({
      animationData: this.animation.export(),
    });
    let t = setTimeout(()=>{
      that.setData({
        isShow:false
      })
      clearTimeout(t)
    },1000)
  } 
});