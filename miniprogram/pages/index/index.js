//index.js
const app = getApp()

Page({
  data: {
    shake: false,
    modal: false
  },

  onLoad() {
    
  },
  beg() {
    if (this.data.shake || this.data.modal) return
    this.setData({ shake: true })
    setTimeout(() => {
      this.setData({ shake: false, modal: true })
    }, 1500)
  },
  hideModal() {
    this.setData({ modal: false })
    // 跳转到结果页

  },
  getRes() {
    console.log('领取上上签')
  }

})
