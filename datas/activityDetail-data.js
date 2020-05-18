let startDetail={
  id:1,
  title:"端午活动",
  imgSrc:"/images/test/1.png",
  status:"已经开始",
  startTime:"2019/10/5",
  endTime:"2020/1/23",
  initiator:"烧鹅店",
  singleLimit:"1",
  scoreLimit:"50",
  levelLimit:"20",
  statusCode:"1",
  desc:"参与本次活动就可以凭借优惠劵到商家处领取一个粽子",
  sum:100,
  // 正在参加的人数
  participants:"59",
  //优惠劵剩余的数量
  remaining:20,
}
let readyDetail={
  imgSrc:"/images/test/1.png",
  title:"端午活动",
  id:2,
  status:"还未开始",
  startTime:"2019/10/5",
  endTime:"2020/1/23",
  initiator:"烧鹅店",
  singleLimit:"1",
  scoreLimit:"50",
  levelLimit:"20",
  statusCode:"2",
  desc:"参与本次活动就可以凭借优惠劵到商家处领取一个粽子",
  sum:100,
  //活动的访问地址
  url:"",
  //预定的人数
  subscribe:"59",
  //优惠劵剩余的数量
  remainingTime:"23"
}
let endDetail={
  imgSrc:"/images/test/1.png",
  title:"端午活动",
  id:2,
  status:"还未开始",
  startTime:"2019/10/5",
  endTime:"2020/1/23",
  initiator:"烧鹅店",
  singleLimit:"1",
  scoreLimit:"50",
  levelLimit:"20",
  statusCode:"3",
  desc:"参与本次活动就可以凭借优惠劵到商家处领取一个粽子",
  sum:100,
  //参加的人数
  participants:"59",
  //发出去的优惠劵总量
  publish:"23"
}
module.exports={startDetail,readyDetail,endDetail}