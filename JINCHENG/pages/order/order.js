// pages/order/order.js
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
    "items":[
      {
        "id":"1",
        "imageUrl":"http://image.seohost.cn/storage/10279/product/20210908/thumb_pc_20210908173757_57323.jpg",
        "content":"悬挂式超细干粉灭火装置（无源型）"
      },
      {
        "id":"2",
        "imageUrl":"http://image.seohost.cn/storage/10279/product/20210908/thumb_pc_20210908164903_56545.png",
        "content":"双柜式七氟丙烷气体灭火装置"
      },
      {
        "id":"3",
        "imageUrl":"http://image.seohost.cn/storage/10279/product/20210824/thumb_pc_1629795748369334.png",
        "content":"悬挂式超细干粉灭火装置(有源型)"
      },
      {
        "id":"4",
        "imageUrl":"http://image.seohost.cn/storage/10279/product/20210825/thumb_pc_1629858506191303.png",
        "content":"AFFF水成膜泡沫灭火剂"
      },
      {
        "id":"5",
        "imageUrl":"http://image.seohost.cn/storage/10279/product/20210825/thumb_pc_1629856716970405.png",
        "content":"S/AR抗溶性合成泡沫灭火剂"
      },
      {
        "id":"6",
        "imageUrl":"http://image.seohost.cn/storage/10279/product/20210825/thumb_pc_1629854923347313.png",
        "content":"气溶胶自动灭火系统"
      },
      {
        "id":"7",
        "imageUrl":"http://image.seohost.cn/storage/10279/product/20210908/thumb_pc_20210908173757_57323.jpg",
        "content":"电磁悬挂式七氟丙烷气体灭火装置"
      },
    ]
  },
  onReady:function(){

  },
  onShow:function(){

  },
  onHide:function(){

  },
  onUnload:function(){

  },
  onLoad: function (options) {

  },
  isShow(){
    this.setData({
      isShow:! this.data.isShow
    })
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