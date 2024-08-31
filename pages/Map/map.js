// pages/Map/map.js
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    key: "",
    src: null,
    markers: [{
        iconPath: "../assets/Icons/point.png",
        id: 0,
        latitude: 39.949459,
        longitude: 116.403694,
        width: 25,
        height: 25,
        label: {
          name: "北京"
        }
      },
      {
        iconPath: "../assets/Icons/point.png",
        id: 0,
        latitude: 31.86577,
        longitude: 117.194778,
        width: 25,
        height: 25,
        label: {
          name: "安徽"
        }
      },
      {
        iconPath: "../assets/Icons/point.png",
        id: 0,
        latitude: 29.556681,
        longitude: 106.553263,
        width: 25,
        height: 25,
        label: {
          name: "重庆"
        }
      },
      {
        iconPath: "../assets/Icons/point.png",
        id: 0,
        latitude: 26.144144,
        longitude: 119.292069,
        width: 25,
        height: 25,
        label: {
          name: "福建"
        }
      },
      {
        iconPath: "../assets/Icons/point.png",
        id: 0,
        latitude: 36.094212,
        longitude: 103.856737,
        width: 25,
        height: 25,
        label: {
          name: "甘肃"
        }
      },
      {
        iconPath: "../assets/Icons/point.png",
        id: 0,
        latitude: 23.185545,
        longitude: 113.239359,
        width: 25,
        height: 25,
        label: {
          name: "广东"
        }
      },
      {
        iconPath: "../assets/Icons/point.png",
        id: 0,
        latitude: 22.861984,
        longitude: 108.345678,
        width: 25,
        height: 25,
        label: {
          name: "广西 "
        }
      },
      {
        iconPath: "../assets/Icons/point.png",
        id: 0,
        latitude: 26.707352,
        longitude: 106.616332,
        width: 25,
        height: 25,
        label: {
          name: "贵州 "
        }
      },
      {
        iconPath: "../assets/Icons/point.png",
        id: 0,
        latitude: 19.968035,
        longitude: 110.350983,
        width: 25,
        height: 25,
        label: {
          name: "海南 "
        }
      },
      {
        iconPath: "../assets/Icons/point.png",
        id: 0,
        latitude: 38.083783,
        longitude: 114.508772,
        width: 25,
        height: 25,
        label: {
          name: "河北 "
        }
      },
      {
        iconPath: "../assets/Icons/point.png",
        id: 0,
        latitude: 34.769161,
        longitude: 113.644099,
        width: 25,
        height: 25,
        label: {
          name: "河南 "
        }
      },
      {
        iconPath: "../assets/Icons/point.png",
        id: 0,
        latitude: 45.801617,
        longitude: 126.522207,
        width: 25,
        height: 25,
        label: {
          name: "黑龙江 "
        }
      },
      {
        iconPath: "../assets/Icons/point.png",
        id: 0,
        latitude: 30.601078,
        longitude: 114.361594,
        width: 25,
        height: 25,
        label: {
          name: "湖北"
        }
      },
      {
        iconPath: "../assets/Icons/point.png",
        id: 0,
        latitude: 28.217167,
        longitude: 112.926605,
        width: 25,
        height: 25,
        label: {
          name: "湖南"
        }
      },
      {
        iconPath: "../assets/Icons/point.png",
        id: 0,
        latitude: 43.797768,
        longitude: 125.326383,
        width: 25,
        height: 25,
        label: {
          name: "吉林"
        }
      },
      {
        iconPath: "../assets/Icons/point.png",
        id: 0,
        latitude: 32.038322,
        longitude: 118.832137,
        width: 25,
        height: 25,
        label: {
          name: "江苏"
        }
      },
      {
        iconPath: "../assets/Icons/point.png",
        id: 0,
        latitude: 28.672488,
        longitude: 115.851775,
        width: 25,
        height: 25,
        label: {
          name: "江西"
        }
      },
      {
        iconPath: "../assets/Icons/point.png",
        id: 0,
        latitude: 41.682522,
        longitude: 123.486653,
        width: 25,
        height: 25,
        label: {
          name: "辽宁"
        }
      },
      {
        iconPath: "../assets/Icons/point.png",
        id: 0,
        latitude: 40.849642,
        longitude: 111.785972,
        width: 25,
        height: 25,
        label: {
          name: "内蒙古"
        }
      },
      {
        iconPath: "../assets/Icons/point.png",
        id: 0,
        latitude: 38.482579,
        longitude: 106.257585,
        width: 25,
        height: 25,
        label: {
          name: "宁夏"
        }
      },
      {
        iconPath: "../assets/Icons/point.png",
        id: 0,
        latitude: 36.622494,
        longitude: 101.851432,
        width: 25,
        height: 25,
        label: {
          name: "青海"
        }
      },
      {
        iconPath: "../assets/Icons/point.png",
        id: 0,
        latitude: 36.652148,
        longitude: 117.194778,
        width: 25,
        height: 25,
        label: {
          name: "山东"
        }
      },
      {
        iconPath: "../assets/Icons/point.png",
        id: 0,
        latitude: 37.858034,
        longitude: 112.595453,
        width: 25,
        height: 25,
        label: {
          name: "山西"
        }
      },
      {
        iconPath: "../assets/Icons/point.png",
        id: 0,
        latitude: 34.350591,
        longitude: 109.026378,
        width: 25,
        height: 25,
        label: {
          name: "陕西"
        }
      },
      {
        iconPath: "../assets/Icons/point.png",
        id: 0,
        latitude: 31.211845,
        longitude: 121.518142,
        width: 25,
        height: 25,
        label: {
          name: "上海"
        }
      },
      {
        iconPath: "../assets/Icons/point.png",
        id: 0,
        latitude: 30.561282,
        longitude: 104.132697,
        width: 25,
        height: 25,
        label: {
          name: "四川"
        }
      },
      {
        iconPath: "../assets/Icons/point.png",
        id: 0,
        latitude: 39.001295,
        longitude: 117.286764,
        width: 25,
        height: 25,
        label: {
          name: "天津"
        }
      },
      {
        iconPath: "../assets/Icons/point.png",
        id: 0,
        latitude: 29.649484,
        longitude: 91.144205,
        width: 25,
        height: 25,
        label: {
          name: "西藏"
        }
      },
      {
        iconPath: "../assets/Icons/point.png",
        id: 0,
        latitude: 43.817754,
        longitude: 87.667116,
        width: 25,
        height: 25,
        label: {
          name: "新疆"
        }
      },
      {
        iconPath: "../assets/Icons/point.png",
        id: 0,
        latitude: 24.866897,
        longitude: 102.881681,
        width: 25,
        height: 25,
        label: {
          name: "云南"
        }
      },
      {
        iconPath: "../assets/Icons/point.png",
        id: 0,
        latitude: 30.274265,
        longitude: 120.211934,
        width: 25,
        height: 25,
        label: {
          name: "浙江"
        }
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'I74BZ-2RBWG-B6CQ4-QQPDT-57H76-X3B7H'
    });

    this.mapCtx = wx.createMapContext('mapId')
    this.setData({
      polygon: this.data.polygon,
    });
  },
  onShow: function () {
  },

})