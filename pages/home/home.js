// pages/home/home.js
let datas=require('../../datas/home-data.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    advertisement:[],
    foodList:[],
    navs: []
  },
  catchTapCategory(event){
    let category=event.currentTarget.dataset.type;
    if(category=='商户'){
      let url = '/pages/shop/shop'
      wx.navigateTo({
        url
      })
    }

  },
  goToFoodDetail(event){
    let id=event.currentTarget.dataset.id
    let url='/pages/foodDetail/foodDetail?id='+id
    console.log("url:"+url)
    wx.navigateTo({
      url
    })
  },
  goToAdvertisementDetail(event){
    // console.log(event)
    let url=event.target.dataset.url
    console.log(url)
    wx.reLaunch({
      url
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("datas:"+datas)
    this.setData({
      advertisement:datas.advertisement,
      foodList:datas.foodList,
      navs:datas.navs
    })
    // this.data.advertisement=datas.advertisment
    console.log("advertisement:"+this.data.advertisement)
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