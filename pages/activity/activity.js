// pages/activity/activity.js
let datas=require("../../datas/activity-data")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    focus:'未开始',
    activityList:[]

  },
  goToActivityDetail(event){
    console.log(event)
    let id=event.currentTarget.dataset.id
    let url="/pages/activityDetail/activityDetail?id="+id
    wx.navigateTo({
      url
    })
  },
  switchToStart(event){
    let focus=event.currentTarget.dataset.id
    let activityList=datas.startActivityList
    this.setData({
      focus,
      activityList
    })
  },
  switchToReady(event){
    let focus=event.currentTarget.dataset.id
    let activityList=datas.readyActivityList
    this.setData({
      focus,
      activityList
    })
  },
  switchToEnd(event){
    let focus=event.currentTarget.dataset.id
    let activityList=datas.endActivityList
    this.setData({
      focus,
      activityList
    })
    console.log(focus)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let activityList=datas.startActivityList
    this.setData({
      activityList
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