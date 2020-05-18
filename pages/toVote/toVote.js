// pages/toVote/toVote.js
let datas = require('../../datas/toVote-data')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal: 'sdfs',
    data: {}
  },
  inputTyping: function (e) {
    let inputVal = e.detail.value
    this.setData({
      inputVal
    });
    console.log(this.data.inputVal)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let data = datas.data
    this.setData({
      data
    })
  },
  vote() {
    console.log(this.data.inputVal)
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