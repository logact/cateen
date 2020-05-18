// pages/favoriter/favoriter.js
let datas=require("../../datas/favoriter-data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:{},
    label:"delicacy"
  },
  /**
   * 
   * @param {*} event 
   */

  handleLable(event){
     let label=event.currentTarget.dataset.id
     this.setData({
       label
     })
     let dataList=datas.delicacyList;
     if(label==="delicacy"){
       dataList=datas.delicacyList
     }else if(label==="shop"){
       dataList=datas.shopList
     }else if(label==="blog"){
       dataList=datas.blogList
     }else if(lable==="activity"){
       dataList=datas.activityList
     }
     this.setData({
       dataList
     })
    console.log(label)
  },
  goToFavoriterDetail(){

  },
  deleteFavoriter(){
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let dataList=datas.delicacyList;
    console.log(dataList)
    this.setData({
      dataList
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