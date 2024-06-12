Page({
  data: {
    content: '',
    location: {}
  },

  onLoad: function() {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        this.setData({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          }
        })
      }
    })
  },

  bindContentInput: function(e) {
    this.setData({
      content: e.detail.value
    })
  },

  submitInfo: function() {
    const { content, location } = this.data
    const userInfo = wx.getStorageSync('userInfo') || {}

    if (!content) {
      wx.showToast({
        title: '内容不能为空',
        icon: 'none'
      })
      return
    }

    wx.cloud.callFunction({
      name: 'postInfo',
      data: {
        content: content,
        location: location,
        userInfo: userInfo
      },
      success: res => {
        if (res.result.success) {
          wx.showToast({
            title: '发布成功',
            icon: 'success'
          })
          wx.navigateBack()
        } else {
          wx.showToast({
            title: res.result.errorMessage,
            icon: 'none'
          })
        }
      },
      fail: err => {
        wx.showToast({
          title: '发布失败',
          icon: 'none'
        })
        console.error(err)
      }
    })
  }
})
