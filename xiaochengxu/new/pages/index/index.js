var app = getApp()
Page({
  data: {
    movies: [
      { url: 'image/image_replay_birthday.jpg' },
      { url: 'image/image_replay_graduate.png' }
    ]
  },
  onLoad: function () {
  },
  scanCode: function () {
    var that = this
    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        console.log(res)
      },
      fail: function (res) {
      }
    })
  },
  
})
