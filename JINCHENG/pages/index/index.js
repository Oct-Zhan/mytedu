const htmlSnip = `<p>　　福建精诚消防设备制造有限公司是一家专业从事消防产品研发、生产、销售、安装服务为一体的现代化省级高新技术企业。我司配备了各种先进的生产设备、现代化的检测和试验中心，通过了IS09001:2000质量管理体系认证。我们的产品通过了公安部首批消防产品“CCCF”国家强制性认证并更换了消防产品自愿性认证。经过多年的开发创新，拥有多项国家专利产品。</p><p>　　公司主要生产七氟丙烷气体灭火系统、泡沫灭火系统、自动跟踪定位射流灭火装置等高端消防产品。我们始终秉持“精于品质、诚于服务”的企业宗旨，本着开拓进取的精神，将一如既往为广大用户提供优质的产品和一流的服务。</p><p><br/></p><p>　　Fujian Jingcheng Fire Fighting Equipment Manufacturing Co., Ltd. is a 
modern provincial-level high-tech enterprise specializing in the research and 
development, production， sales and installation of fire protection products. 
Our company is equipped with various advanced production equipment, modern 
inspection and testing center, and passed the ISO9001:2000 quality management 
system certification. Our products have passed the &quot;CCCF&quot; national compulsory certification of the first batch of fire protection products by the Ministry 
of Public Security and replaced the voluntary certification of fire protection 
products. After years of development and innovation, it has a number of national 
patent products.</p><p>The company mainly produces high-end fire fighting products such as 
heptafluoropropane gas fire extinguishing system, foam fire extinguishing 
system, and automatic tracking and positioning jet fire extinguishing device. We 
always adhere to the corporate tenet of &quot;Focus on quality and sincere in 
service&quot; and in the spirit of pioneering and enterprising, we will continue to 
provide customers with high-quality products and first-class services.&nbsp;</p><p><br/></p>
`;
const nodes = [{
  name: 'p',
  attrs: {
    class: 'det',
    style: 'line-height: 60px; color: red;'
  },
  children: [{
    type: 'text',
    text: 'You never know what you\'re gonna get.'
  }]
}];
const nodeSnip = `Page({
data: {
  nodes: ${JSON.stringify(nodes, null, 2)}
}
})
`;
Page({
  data: {
    htmlSnip,
    nodeSnip,
    renderedByHtml: false,
    renderedByNode: false,
    nodes,
    open: false,
    isShow: false,//显示隐藏
    condition: true,
    animation: {},
    //轮播
  },
  //富文本
  onShareAppMessage() {
    return {
      title: 'rich-text',
      path: 'page/component/pages/rich-text/rich-text'
    };
  },
  renderHtml() {
    this.setData({
      renderedByHtml: true
    });
  },
  renderNode() {
    this.setData({
      renderedByNode: true
    });
  },
  enterCode(e) {
    console.log(e.detail.value);
    this.setData({
      htmlSnip: e.detail.value
    });
  },
  // list
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
  },
  //轮播轮动事件
  listenSwiper:function(e){
    console.log(e)
  }
});