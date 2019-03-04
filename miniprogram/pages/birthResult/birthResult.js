// miniprogram/pages/birthResult/birthResult.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    res: null,
    men: '',
    women: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    wx.request({
      url: `https://apicloud.mob.com/appstore/marriage/day?key=2a48d2d03c920&menDate=${options.m}&menHour=10&womanDate=${options.w}&womanHour=10`,
      success: data => {
        this.setData({ res: data.data.result, men: options.men, women: options.women})
        console.log(data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage () {
    return {
      title: 'asdasdasd',
      path: '/pages/index/index'
    }
  }
})