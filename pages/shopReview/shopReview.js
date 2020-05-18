
// pages/review/review.js
let datas=require('../../datas/review-data')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodCount:null,
    badCount:null,
    middleCount:null,
    reviews:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let goodCount = datas.goodCount
    let middleCount = datas.middleCount
    let badCount = datas.badCount
    let reviews = datas.reviews

    this.setData({
      goodCount,
      badCount,
      middleCount,
      reviews
    })
  },

  biggerChildReview(event){
    console.log('xx')
    let id=event.currentTarget.dataset.id
    let url='/pages/reviewDetail/reviewDeatil?id='+id
    wx.navigateTo({
      url
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

  }
})