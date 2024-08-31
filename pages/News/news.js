// pages/News/news.js
import News from "./newsList"
Page({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    src: "",
    //src: "https://cn-videos.dji.net/video_trans/09932d4159d6487c8f19246acbcca8d0/720.mp4",
    tabList: [{
      value: "全部",
      code: "0"
    }, {
      value: "公安",
      code: "1"
    }, {
      value: "消防",
      code: "2"
    }, {
      value: "应急",
      code: "3"
    }, {
      value: "林业",
      code: "4"
    }, {
      value: "国土",
      code: "5"
    }, {
      value: "城治",
      code: "6"
    }, {
      value: "电力",
      code: "7"
    }, {
      value: "环保",
      code: "8"
    }, {
      value: "其它",
      code: "9"
    }],
    newsArr: [],
    confirmBtn: {
      content: '关闭',
      variant: 'outline',
      theme: "light",
    },
    dialogKey: '',
    showText: false,
    showMultiText: false,
    showTextAndTitle: false,
    showMultiTextAndTitle: false,
    currentContent: {}
  },
  showDialog(e) {
    const {
      key
    } = e.currentTarget.dataset;
    this.setData({
      [key]: true,
      dialogKey: key,
      currentContent: e.currentTarget.dataset.item
    });
  },

  closeDialog() {
    const {
      dialogKey
    } = this.data;
    this.setData({
      [dialogKey]: false
    });
  },
  onTabsClick(event) {
    //选中全部
    if (event.detail.value == "0") {
      let array = [];
      News.forEach(item => {
        array = [...array, ...item.newsList]
      })
      array.sort(this.dateData("date", false))
      this.setData({
        newsArr: {
          id: "0",
          name: "全部",
          videoUrl: "../assets/videoUrl/ShuiLi.mp4",
          newsList: array
        }
      })
    }
    News.forEach(item => {
      if (item.id == event.detail.value) {
        this.setData({
          newsArr: item
        })
      }
    })
  },
  dateData(property, bol) {
    return function (a, b) {
      var value1 = a[property];
      var value2 = b[property];
      if (bol) {
        // 升序
        return Date.parse(value1) - Date.parse(value2);
      } else {
        // 降序
        return Date.parse(value2) - Date.parse(value1)
      }
    }
  },
  onLoad() {
    //初始加载全部
    let array = [];
    News.forEach(item => {
      array = [...array, ...item.newsList]
    })
    array.sort(this.dateData("date", false))
    this.setData({
      newsArr: {
        id: "0",
        name: "全部",
        videoUrl: "/pages/assets/videoUrl/ShuiLi.mp4",
        newsList: array
      }
    })
  },
})