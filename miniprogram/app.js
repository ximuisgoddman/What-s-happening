App({
  onLaunch: function() {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'your-cloud-env-id',
        traceUser: true,
      })
    }
    this.globalData = {}
    this.checkUserLogin()
  },

  checkUserLogin: function() {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              wx.setStorageSync('userInfo', res.userInfo)
            }
          })
        }
      }
    })
  }
})
