// index.js
import DeviceList from "./deviceList"
Page({
  data: {
    sceneTypeList: [{
        name: "公安",
        id: "1",
        src: './assets/type/1.png'
      },
      {
        name: "消防",
        id: "2",
        src: './assets/type/2.png'
      },
      {
        name: "应急",
        id: "3",
        src: './assets/type/3.png'
      },
      {
        name: "林业",
        id: "4",
        src: './assets/type/4.png'
      },
      {
        name: "国土",
        id: "5",
        src: './assets/type/5.png'
      },
      {
        name: "城治",
        id: "6",
        src: './assets/type/6.png'
      },
      {
        name: "电力",
        id: "7",
        src: './assets/type/7.png'
      },
      {
        name: "环保",
        id: "8",
        src: './assets/type/8.png'
      },
      {
        name: "其它",
        id: "9",
        src: './assets/type/9.png'
      },
    ],
    deviceList: [],
    product: {
      value: '1',
      options: [{
          value: '1',
          label: '无人机',
        },
        {
          value: '2',
          label: '其它',
        },
      ],
    },
    markers: [{
        iconPath: "../assets/Icons/point-point.png",
        id: 0,
        latitude: 30.3195,
        longitude: 120.250874,
        width: 20,
        height: 20,
      },
      {
        iconPath: "../assets/Icons/point-point.png",
        id: 1,
        latitude: 30.450546,
        longitude: 119.880425,
        width: 20,
        height: 20,
      },
      {
        iconPath: "../assets/Icons/point-point.png",
        id: 2,
        latitude: 30.40763,
        longitude: 119.899603,
        width: 20,
        height: 20,
      }
    ],
    // 画圆的参数设定（color边界框线颜色，radius半径，这里设了等于没设，因为后面会根据画面来匹配大小，stokeWidth边界框线粗细）
    circles: [{
      latitude: '30.3195',
      longitude: '120.250874',
      color: '#7cb5ec',
      fillColor: '#7cb5ec88',
      radius: 40000,
      strokeWidth: 2
    }, {
      latitude: '30.450546',
      longitude: '119.880425',
      color: '#7cb5ec',
      fillColor: '#7cb5ec88',
      radius: 40000,
      strokeWidth: 2
    }, {
      latitude: '30.40763',
      longitude: '119.899603',
      color: '#7cb5ec',
      fillColor: '#7cb5ec88',
      radius: 40000,
      strokeWidth: 2
    }],
  },
  onLoad() {
    this.setData({
      deviceList: DeviceList[0].device
    })
  },
  onChange(e) {
    this.setData({
      'product.value': e.detail.value,
    });
    if (e.detail.value === "1") {
      this.setData({
        deviceList: DeviceList[0].device
      })
    } else {
      this.setData({
        deviceList: DeviceList[1].device
      })
    }
  },
  productPage: function (e) {
    wx.navigateTo({
      url: '/pages/index/Product/product?id=' + e.currentTarget.dataset.id,
    })
  },
  fullMap: function(e){
    wx.navigateTo({
      url: '/pages/index/MapFull/full_map',
    })
  },
  go2detail: function (e) {
    wx.navigateTo({
      url: '/pages/index/Details/details?id=' + e.currentTarget.dataset.id,
    })
  },
})