/**
 * fooDetail 的数据
 * id:food的主键
 * name:品名
 * shop:店名
 * location:位置
 * price:价格
 * foodDetailImgs:详情图 [数组]
 * score:评分
 * collectNum:收藏数
 * shopId:商店的主键
 * types:分类 [数组]
 * recommendFood:相关推荐食品 [数组]
 * desc:详细描述
 * publishDate:发布日期
 * upadateDate:更新日期
 * isCollected:是否被收藏
 */
let foodDetail=[
  {
    id:1,
    shopId:1,
    isCollected:true,
    publishDate:2019/10/1,
    updateDate:2019/10/2,
    name:"北京烤鸭",
    shop:"生鲜店铺",
    location:"食堂第一楼",
    price:"89",
    foodDetailImgs:["/images/test/1.png","/images/test/2.png","/images/test/3.png"],
    score:"8.5",
    collectNum:"89",
    negativeReviewNum:"98",
    positiveReviewNum:"78",
    mediumReviewNum:"90",
    collectNum:'23',
    types:[{
      id:"1",
      name:"甜的"
    },
    {
      id:"1",
      name:"甜的"
    },
    {
      id:"1",
      name:"甜的"
    }],
    recommendFoods:[{
      name:"辣子鸡丁",
      shop:"店铺",
      imgSrc:"/images/test/1.png",
      id:"1"
    }],
    ingredients:["豆腐","红油","花生","辣子","啤酒"],
    desc:"好吃好吃好吃好吃好吃好吃好吃好吃好吃和好吃好吃好吃好吃好吃好吃好吃好吃好吃和"
  },
  {
    id:2,
    shopId:2,
    collectNum:'23',
    isCollected:false,
    publishDate:"2019.10.1",
    updateDate:"2019.12.2",
    name:"广东烧鹅",
    shop:"烧鹅店",
    location:"食堂第2楼",
    price:"84",
    foodDetailImgs:["/images/test/1.png","/images/test/2.png","/images/test/3.png"],
    score:"8.5",
    collectNum:"89",
    negativeReviewNum:"98",
    positiveReviewNum:"78",
    mediumReviewNum:"90",
    types:[{
      id:"1",
      name:"甜的"
    },
    {
      id:"1",
      name:"甜的"
    },
    {
      id:"1",
      name:"甜的"
    }],
    recommendFoods:[{
      imgSrc:"/images/test/2.png",
      name:"辣子鸡丁",
      id:"1"
    },{
      imgSrc:"/images/test/2.png",
      name:"辣子鸡丁",
      id:"1"
    },{
      imgSrc:"/images/test/1.png",
      name:"辣子鸡丁",
      id:"1"
    }],
    ingredients:["豆腐","红油","花生","辣子","啤酒"],
    desc:"好吃好吃好吃好吃好吃好吃好吃好吃好吃和好吃好吃好吃好吃好吃好吃好吃好吃好吃和"
  }
]
module.exports={foodDetail}