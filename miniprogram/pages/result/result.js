// miniprogram/pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    docItem: null,
    caseList: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    wx.getStorage({
      key: 'docItem',
      success: res => {
        let arr = []
        res.data.case.forEach((item, index) => {
          let d = {}
          if (index % 2 == 0) {
            d.title = item
          } else {
            d.content = item.split(/\n/g)
          }
          arr.push(d)
        })
        this.setData({
          docItem: res.data,
          caseList: arr
        })
        console.log(arr)
        wx.setNavigationBarTitle({
          title: `${res.data.sort}`,
        })
      }
    })
  }
})