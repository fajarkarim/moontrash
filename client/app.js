var app = new Vue({
  el: '#app',
  data: {
    message: 'adfadfas',
    isLogin: false
  },
  methods: {
    logout: function () {
      console.log('masuk')
      FB.logout(function (response) {
        console.log(response)
        location.reload()
      })
    }
  }
})
