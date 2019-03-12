//index.js
const app = getApp()

Page({
  data: {
    shake: false,
    modal: false,
    docItem: null
  },

  onLoad() {
    
  },
  beg() {
    if (this.data.shake || this.data.modal) return
    this.setData({ shake: true })
    wx.cloud.callFunction({
      name: 'docList'
    }).then(res => {
      let data = res.result.data
      let random = Math.floor(Math.random() * data.length)
      let docItem = data[random] ? data[random] : data[random - 1]
      
      setTimeout(() => {
        this.setData({ shake: false, modal: true, docItem })
      }, 1000)
      wx.setStorage({
        key: 'docItem',
        data: docItem,
      })
    })
  },
  hideModal() {
    this.setData({ modal: false })
  },
  getRes(e) {
    let docId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/result/result?id=${docId}`,
    })
    this.hideModal()
  }

})
