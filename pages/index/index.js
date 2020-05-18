// pages/index/index.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo') 
  },
  goStudy(){
        //在这里不能用navigateTo或者redirectTo，官网文档，这两个指定跳转到一个页面，但是不能跳转到tabbar页面，
    // 这个项目app.json中，pages中首先显示的是welcome页面，但是在tabbar配置中，首个是posts页面， 不符合逻辑，
    //所以在首先显示的welcome页面中，不会显示tabbar，则这里就成了从无tabbar页面跳转到有tabbar页面，所以这两个路由跳转不可以用
    wx.reLaunch({
      url: '../person/person'
    })
  },
  login(){
    wx.login({
      success (res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session',
            method:'get',
            data:{
              // ?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code',
              appid:"wx924cc4e5da118a62",
              secret:"4b34e67cf39b2d29d31588af5e10cc58",
              js_code:res.code,
              grant_type:'authorization_code'
            },
            success:(res)=>{
              console.log(res.data)
              // oIkML46uaPe4yeZL5hq4Cy6Yuyuo
              let openid = res.data.openid
              app.globalData.openid=openid
              console.log("OPEN_ID")
              console.log(app.globalData)
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    console.log(this.data.userInfo)
    wx.getUserInfo({
      succees: (data)=>{
        console.log(data)
      }
    })
    
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasU1serInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    this.login()
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