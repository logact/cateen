/**
 * advertisement
 * home页的轮播图
 * id:唯一标识
 * url:活动地址
 * imgSrc:图片地址
 */
let advertisement=[
  {
    id:'1',
    url:"/pages/search/search",
    imgSrc:"/images/test/1.png"
  },
  {
    id:'1',
    url:"/pages/search/search",
    imgSrc:"/images/test/1.png"
  }
];
/**
 * 主页的推荐列表
 * id: 主键
 * name: 食品的名字
 * shop: 食品所属的店铺
 * imgSrc: 食品的图片
 * desc: 食品的描述
 * location: 位置
 * price:价格
 * score:评分
 */
let foodList=[
  {
    id:1,
    name:"烤鸭",
    shop:"北京烤鸭店",
    desc:"简述",
    location:"新食堂一楼三号窗口",
    imgSrc:"/images/test/1.png",
    price:"10.8",
    score:"7.9",
    tags:[
      {name:'甜品'},
      {name:'苦的'},
      {name:'咸的'}
    ]
  },
  {
    id:2,
    name:"烤鸭",
    shop:"北京烤鸭店",
    desc:"简述",
    location:"新食堂一楼三号窗口",
    imgSrc:"/images/test/2.png",
    price:"10.8",
    score:"7.9",
    tags:[
      {name:'甜品'},
      {name:'苦的'},
      {name:'咸的'}
    ]
  },
  {
    id:3,
    name:"烤鸭",
    shop:"北京烤鸭店",
    desc:"简述",
    location:"新食堂一楼三号窗口",
    imgSrc:"/images/test/2.png",
    price:"10.8",
    score:"7.9",
    tags:[
      {name:'甜品'},
      {name:'苦的'},
      {name:'咸的'}
    ]
  },
  {
    id:4,
    name:"烤鸭",
    shop:"北京烤鸭店",
    desc:"简述",
    location:"新食堂一楼三号窗口",
    imgSrc:"/images/test/2.png",
    price:"10.8",
    score:"7.9",
    tags:[
      {name:'甜品'},
      {name:'苦的'},
      {name:'咸的'}
    ]
  },
  {
    id:5,
    name:"烤鸭",
    shop:"北京烤鸭店",
    desc:"简述",
    location:"新食堂一楼三号窗口",
    imgSrc:"/images/test/2.png",
    price:"10.8"
  },
  {
    id:6,
    name:"烤鸭",
    shop:"北京烤鸭店",
    desc:"简述",
    location:"新食堂一楼三号窗口",
    imgSrc:"/images/test/2.png",
    price:"10.8"
  }
]
let navs= [{icon: "../../images/icon/icon-new-list1.png", name: "新品", typeId: 0},
{icon: "../../images/icon/icon-new-list2.png", name: "商户", typeId: 1},
{icon: "../../images/icon/icon-new-list3.png", name: "甄选", typeId: 2},
{icon: "../../images/icon/icon-new-list4.png", name: "社区", typeId: 3}]
module.exports = {advertisement,foodList,navs};