const cloud = require('wx-server-sdk')
cloud.init()

exports.main = async (event, context) => {
  const db = cloud.database()
  const { content, location, userInfo } = event

  try {
    const result = await db.collection('infos').add({
      data: {
        content: content,
        location: db.Geo.Point(location.longitude, location.latitude),
        createTime: db.serverDate(),
        userInfo: userInfo
      }
    })

    return {
      success: true,
      data: result._id
    }
  } catch (e) {
    return {
      success: false,
      errorMessage: e.message
    }
  }
}
