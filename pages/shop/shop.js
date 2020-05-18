// pages/shop/shop.js
let data=require("../../datas/shop-data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopInfo:{},
    collected:false
  },
  handleCollected(){
    let collected=!this.data.collected;
    this.setData({
      collected
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let shopInfo=data.shopInfo
    this.setData({
      shopInfo
    })
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

  },
  goToVote(){
    let url='/pages/vote/vote'
    wx.navigateTo({
      url
    })
  },
  goToComment(){
    let url= '/pages/shopReview/shopReview'
    wx.navigateTo({
      url
    })
  }
})