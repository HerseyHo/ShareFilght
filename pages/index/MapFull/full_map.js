// pages/index/MapFull/full_map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
        iconPath: "../../assets/Icons/point-point.png",
        id: 0,
        latitude: 30.3195,
        longitude: 120.250874,
        width: 20,
        height: 20,
      },
      {
        iconPath: "../../assets/Icons/point-point.png",
        id: 1,
        latitude: 30.450546,
        longitude: 119.880425,
        width: 20,
        height: 20,
      },
      {
        iconPath: "../../assets/Icons/point-point.png",
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})