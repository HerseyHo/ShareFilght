// logs.js
import DeviceList from "../deviceList.js"
Page({
  data: {
    currentType: {

    },
    sceneTypeList: [{
      value: "公安",
      code: '1',
      child: [{
        value: "治安巡逻",
        code: "1-1",
        src: "../assets/type/1-1.png"
      }, {
        value: "禁毒巡检",
        code: "1-2",
        src: "../assets/type/1-2.png"
      }, {
        value: "无人机反制",
        code: "1-3",
        src: "../assets/type/1-3.png"
      }, {
        value: "低空安全保障",
        code: "1-4",
        src: "../assets/type/1-4.png"
      }]
    }, {
      value: "消防",
      code: '2',
      child: [{
        value: "日常巡查",
        code: "2-1",
        src: "../assets/type/2-1.png"
      }, {
        value: "紧急火情画面回传",
        code: "2-2",
        src: "../assets/type/2-2.png"
      }, {
        value: "火情高空感知",
        code: "2-3",
        src: "../assets/type/2-3.png"
      }, {
        value: "紧急运送救援物资",
        code: "2-4",
        src: "../assets/type/2-4.png"
      }]
    }, {
      value: "应急",
      code: 3,
      child: [{
        value: "洪涝灾害救援",
        code: "3-1",
        src: "../assets/type/3-1.png"
      }, {
        value: "地震与地质灾害救援",
        code: "3-2",
        src: "../assets/type/3-2.png"
      }, {
        value: "山岳救援",
        code: "3-3",
        src: "../assets/type/3-3.png"
      }]
    }, {
      value: "林业",
      code: 4,
      child: [{
        value: "森林防火监测",
        code: "4-1",
        src: "../assets/type/4-1.png"
      }, {
        value: "野生动物检测",
        code: "4-2",
        src: "../assets/type/4-2.png"
      }, {
        value: "森林病虫害调查",
        code: "4-3",
        src: "../assets/type/4-3.png"
      }]
    }, {
      value: "国土",
      code: 5,
      child: [{
        value: "耕地保护",
        code: "5-1",
        src: "../assets/type/5-1.png"
      }, {
        value: "边坡治理",
        code: "5-2",
        src: "../assets/type/5-2.png"
      }, {
        value: "矿山巡查",
        code: "5-3",
        src: "../assets/type/5-3.png"
      }]
    }, {
      value: "城治",
      code: 6,
      child: [{
        value: "车流管理",
        code: "6-1",
        src: "../assets/type/6-1.png"
      }, {
        value: "路政监测",
        code: "6-2",
        src: "../assets/type/6-2.png"
      }, {
        value: "高速救援",
        code: "6-3",
        src: "../assets/type/6-3.png"
      }, {
        value: "路况直播",
        code: "6-4",
        src: "../assets/type/6-4.png"
      }, {
        value: "渣土巡防",
        code: "6-5",
        src: "../assets/type/6-5.png"
      }]
    }, {
      value: "电力",
      code: 7,
      child: [{
        value: "输电巡检",
        code: "7-1",
        src: "../assets/type/7-1.png"
      }, {
        value: "配网巡检",
        code: "7-2",
        src: "../assets/type/7-2.png"
      }, {
        value: "变电站巡检",
        code: "7-3",
        src: "../assets/type/7-3.png"
      }, {
        value: "风力发电机巡检",
        code: "7-4",
        src: "../assets/type/7-4.png"
      }, {
        value: "光伏电站巡检",
        code: "7-5",
        src: "../assets/type/7-5.png"
      }]
    }, {
      value: "环保",
      code: 8,
      child: [{
        value: "污水排放巡检",
        code: "8-1",
        src: "../assets/type/8-1.png"
      }, {
        value: "城市垃圾巡检",
        code: "8-2",
        src: "../assets/type/8-2.png"
      }, {
        value: "秸秆焚烧巡检",
        code: "8-3",
        src: "../assets/type/8-3.png"
      }]
    }, {
      value: "其它",
      code: 9,
      child: [{
        value: "防溺水巡检",
        code: "9-1",
        src: "../assets/type/9-1.png"
      }, {
        value: "防钓鱼巡检",
        code: "9-2",
        src: "../assets/type/9-2.png"
      }, {
        value: "河道垃圾巡检",
        code: "9-3",
        src: "../assets/type/9-3.png"
      }]
    }],
    // 设备列表
    deviceList: []
  },
  productPage: function (e) {
    wx.navigateTo({
      url: '/pages/index/Product/product?id=' + e.currentTarget.dataset.id,
    })
  },
  sortDevice: function (e) {
    let datarr = [];
    // DeviceList[0].device.forEach(item=>{

    // })
    // that.setData({
    //   'currentType': datarr,
    // });
  },
  onLoad(options) {
    let that = this;
    const id = options.id;
    this.setData({
      deviceList: DeviceList[0].device.concat(DeviceList[1].device)
    })
    this.data.sceneTypeList.forEach(item => {
      if (item.code == options.id) {
        that.setData({
          'currentType': item,
        });
      }
    })

  }
})