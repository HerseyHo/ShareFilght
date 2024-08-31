// pages/components/BottomBar/bar.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    tabID: String
  },

  /**
   * 组件的初始数据
   */
  data: {},


  /**
   * 组件的方法列表
   */

  methods: {
    checkBar: function (e) {
      if (e.currentTarget.dataset.id == "3") {
        wx.redirectTo({
          url: "/pages/index/index",
        })
        wx.setNavigationBarTitle({
          title: "无人机租赁服务" //页面切换，更换页面标题
        })
      } else if (e.currentTarget.dataset.id == "2") {
        wx.redirectTo({
          url: "/pages/News/news",
        })
        wx.setNavigationBarTitle({
          title: "资讯" //页面切换，更换页面标题
        })
      } else if (e.currentTarget.dataset.id == "4") {
        wx.redirectTo({
          url: "/pages/PersonalCenter/center",
        })
        wx.setNavigationBarTitle({
          title: "个人中心" //页面切换，更换页面标题
        })
      } else if (e.currentTarget.dataset.id == "1") {
        wx.redirectTo({
          url: "/pages/Map/map",
        })
        wx.setNavigationBarTitle({
          title: "首页" //页面切换，更换页面标题
        })
      }
    },
  },
})