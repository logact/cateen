let datas=require("../../datas/search-data.js")
// pages/search/search.js
Page({
  // mixins: [require('../../mixin/themeChanged')],
  data: {
      headImg:'/images/test/4.png',
      types:[],
      Showed: false,
      relatedSearch: [],
      focus:'推荐 '
  },
  focus( event){
      let focus=event.currentTarget.dataset.id;
      this.setData({
          focus
      })
      console.log(event)
  },
  
  showInput: function () {
      this.setData({
          inputShowed: true
      });
  },
  onLoad:function(){
    let types=datas.types
    let relatedSearch=datas.relatedSearch
    console.log(relatedSearch)
    this.setData({
      types,
      relatedSearch
    })
   
  },
  hideInput: function () {
      this.setData({
          inputVal: "",
          inputShowed: false
      });
  },
  clearInput: function () {
      this.setData({
          inputVal: ""
      });
  },
  inputTyping: function (e) {
      let inputVal= e.detail.value
      this.setData({
          inputVal
      });
      this.getRelatedSearch(inputVal)
  },
  getRelatedSearch(inputVal){
      wx.request({
        url: 'url',
        data:{
            'keyWord':inputVal
        },
        method:'POST'
      })
  }
});