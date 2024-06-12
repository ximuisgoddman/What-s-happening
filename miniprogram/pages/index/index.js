const util = require('../../utils/util.js')
Page({
  data: {
    infoList: [],
    location: {},
    radius: 5000 // 搜索半径为5公里
  },

  onLoad: function() {
    this.getUserLocation()
  },

  getUserLocation: function() {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        this.setData({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          }
        })
        this.getNearbyInfo()
      }
    })
  },

  getNearbyInfo: function() {
    const { latitude, longitude, radius } = this.data
    wx.cloud.callFunction({
      name: 'getNearbyInfo',
      data: {
        latitude: latitude,
        longitude: longitude,
        radius: radius
      },
      success: res => {
        if (res.result.success) {
          this.setData({
            infoList: res.result.data
          })
        } else {
          console.error(res.result.errorMessage)
        }
      },
      fail: err => {
        console.error(err)
      }
    })
  },

  navigateToPost: function() {
    wx.navigateTo({
      url: '/pages/post/post'
    })
  },

  navigateToDetail: function(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    })
  }
})
