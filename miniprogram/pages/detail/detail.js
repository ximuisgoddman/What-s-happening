Page({
  data: {
    info: {}
  },

  onLoad: function(options) {
    const { id } = options
    this.getInfoDetail(id)
  },

  getInfoDetail: function(id) {
    const db = wx.cloud.database()
    db.collection('infos').doc(id).get({
      success: res => {
        this.setData({
          info: res.data
        })
      },
      fail: err => {
        console.error(err)
      }
    })
  }
})
