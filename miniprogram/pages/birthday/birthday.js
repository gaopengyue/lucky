// miniprogram/pages/birthday/birthday.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menName: '',
    womenName: '',
    menDate: '',
    womenDate: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  birthday() {
    if (!this.data.menName) {
      this.toast('请输入男生姓名')
    } else if (!this.data.womenName) {
      this.toast('请输入女生姓名')
    } else if (!this.data.menDate) {
      this.toast('请选择男生生日')
    } else if (!this.data.womenDate) {
      this.toast('请选择女生生日')
    } else {
      this.submit()
    }
    
  },
  submit() {
    let url = '/pages/birthResult/birthResult'
    wx.navigateTo({
      url: `${url}?m=${this.data.menDate}&w=${this.data.womenDate}&men=${this.data.menName}&women=${this.data.womenName}`,
    })
  },
  input(e) {
    let val = e.detail.value
    if (val) {
      val = val.replace(/\s+/g, '')
      if (e.currentTarget.dataset.type == 'men') {
        this.setData({ menName: val })
      } else {
        this.setData({ womenName: val })
      }
    }
  },
  changeDate(e) {
    let date = e.detail.value
    if (e.currentTarget.dataset.type == 'men') {
      this.setData({ menDate: date })
    } else {
      this.setData({ womenDate: date })
    }
  },
  toast(title) {
    wx.showToast({
      title,
      icon: 'none'
    })
  }
})