const cloud = require('wx-server-sdk')
cloud.init()

exports.main = async (event, context) => {
  const db = cloud.database()
  const _ = db.command
  const { longitude, latitude, radius } = event

  try {
    const nearbyInfos = await db.collection('infos').where({
      location: _.geoNear({
        geometry: db.Geo.Point(longitude, latitude),
        maxDistance: radius
      })
    }).get()

    return {
      success: true,
      data: nearbyInfos.data
    }
  } catch (e) {
    return {
      success: false,
      errorMessage: e.message
    }
  }
}
