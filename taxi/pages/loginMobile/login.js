import { i18n } from '../../i18n/lang'
// pages/loginMobile/login.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nextBtnDisabled: true,
    nextBtnBc: '#bcbcbc',
    phone: '',
    i18n
  },
  onLoad() {
    this.setData({
      i18n
    })
  },
  testPhone: function (s) {
    if (s != null && s) {
      var length = s.length
      if (length = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/.test(s)) {
        return true
      } else {
        return false
      }
    }
  },
  // 输入手机号事件
  phoneInput: function (e) {
    var _self = this
    _self.setData({phone: e.detail.value})
    var isPhone = _self.testPhone(e.detail.value)
    if (isPhone) {
      _self.setData({
        nextBtnDisabled: false,
        nextBtnBc: '#4a4c5b'
      })
    } else {
      _self.setData({
        nextBtnDisabled: true,
        nextBtnBc: '#bcbcbc'
      })
    }
  },
  // 清空手机号
  deletePhone: function () {
    console.log("a")
    this.setData({phone: ''})
  },
  // 登录
  login: function () {
    wx.showToast({
        title: i18n['登录成功'],
        icon: 'success',
        duration: 500
    })
    app.globalData.userInfo = { phone: this.data.phone }
    setTimeout(() => {
      wx.reLaunch({
        url: '/pages/index/index',
      })
    }, 500)
  }
})