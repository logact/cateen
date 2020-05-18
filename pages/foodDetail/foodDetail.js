// pages/foodDetail/foodDetail.js
let foodDetailInfo=require("../../datas/foodDetail-data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collectNum:null,
    foodDetail:{},
    isCollected:false
  },
  /**
   * 跳转到推荐的事件
   */
  goToRecommendFood(event){
    let id=event.currentTarget.dataset.id
    let url="/pages/foodDetail/foodDetail?id="+id
    wx.navigateTo({
      url
    })
  },
  /**
   * 处理收藏事件
   */
  handleCollection(){

    let isCollected=!this.data.isCollected;
    this.setData({
      isCollected
    })
    console.log("isCollectec:"+this.data.isCollected)
    //  handleRemoteCollect()
  },
  /**
   * 将远端服务器中的数据重置
   */
  handleRemoteCollect(){
    // oodDetailInfo.foodDetail[id].
  },
  goToComment(event){
    let id=event.currentTarget.dataset.id
    let url="/pages/review/review?id="+id
    wx.navigateTo({
      url
    })
  },
  goToMeasure(event){
    let id=event.currentTarget.dataset.id
    let url="/pages/measure/measure?id="+id
    wx.navigateTo({
      url
    })
  },
  goToBuy(event){
    let id=event.currentTarget.dataset.id
    let url="/pages/buy/buy?id="+id
    wx.navigateTo({
      url
    })
  },
  goToShop(event){
    let id=event.currentTarget.dataset.id
    let url="/pages/shop/shop?id="+id
    wx.navigateTo({
      url
    })
  },
  goToType(event){
    let id=event.currentTarget.dataset.id
    let url="/pages/search/search/type?id="+id
    wx.navigateTo({
      url
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id=options.id
    id=1
    console.log("id:  "+options.id)
    let foodDetail=foodDetailInfo.foodDetail[id]
    let isCollected=foodDetail.isCollected
    let collectNum=foodDetail.collectNum
    this.setData({
      collectNum,
      foodDetail,
      isCollected
    })
    
    console.log("foodDetail:"+this.data.foodDetail)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})