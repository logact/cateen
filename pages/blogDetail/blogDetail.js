let datas=require('../../datas/blogDetail-data.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    detailObj:[],
    index:null
  },
  handleShare(){
    wx.showActionSheet({
      itemList: [
        '分享到朋友圈','分享到qq空间','分享到微博'
      ]
    })
  },
  handleMusicPlay(){
    let isMusicPlay=!this.data.isMusicPlay;
    this.setData({
      isMusicPlay
    })
    if(isMusicPlay){
      let {dataUrl,title}=this.data.detailObj.music;
      console.log("url:"+dataUrl)
      console.log("title:"+title)
      wx.playBackgroundAudio({
        dataUrl,
        title
      })
    }else{
      wx.pauseBackgroundAudio()
    }
  },
  handleCollection(){
    let isCollected=!this.data.isCollected;

    this.setData({
      isCollected
    })
    let icon=isCollected?'success':'fail';
    let title=isCollected?'收藏成功':'取消收藏';
    wx.showToast({
      title: title,
      icon: icon
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */ 
  onLoad: function (options) {
    let id=options.id;
    let detailObj =  datas.datas[id]
    this.setData({
      detailObj
    })
    //这样设置是无效的
    //this.data.detailObj=datas.list_data[index]
    console.log(this.data.detailObj)
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