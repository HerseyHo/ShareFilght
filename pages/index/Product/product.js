// product.js
import DeviceList from "../deviceList"
Page({
  data: {
    current: 0,
    currentItem: {},
    deviceList: [],
    timeRange: [{
        label: '9:00至11:00 ',
        value: '1'
      },
      {
        label: '11:00至13:00',
        value: '2'
      },
      {
        label: '13:00至15:00',
        value: '3'
      },
      {
        label: '15:00至17:00 ',
        value: '4'
      },
      {
        label: '17:00至1:00',
        value: '5'
      },
      {
        label: '19:00至21:00',
        value: '6'
      },
      {
        label: '21:00至23:00 ',
        value: '7'
      },
      {
        label: '23:00至1:00',
        value: '8'
      },
      {
        label: '1:00至3:00',
        value: '9'
      },
      {
        label: '3:00至5:00 ',
        value: '10'
      },
      {
        label: '5:00至7:00',
        value: '11'
      },
      {
        label: '7:00至9:00',
        value: '12'
      },
    ],
  },
  onColumnChange(e) {
    console.log('picker pick:', e);
  },

  onPickerChange(e) {
    const {
      key
    } = e.currentTarget.dataset;
    const {
      value
    } = e.detail;
    this.setData({
      [`${key}Visible`]: false,
      [`${key}Value`]: value,
      [`${key}Text`]: value.join(' '),
    });
  },

  onPickerCancel(e) {
    const {
      key
    } = e.currentTarget.dataset;
    console.log(e, '取消');
    console.log('picker1 cancel:');
    this.setData({
      [`${key}Visible`]: false,
    });
  },

  onSeasonPicker() {
    this.setData({
      dateVisible: true
    });
  },
  onLoad(options) {
    var that = this;
    const id = options.id;
    DeviceList[0].device.forEach(item => {
      if (item.id === id) {
        that.setData({
          currentItem: item,
        });
      }
    })
  }
})