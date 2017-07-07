var app = new Vue({
  el: '#app',
  data: {
    message: 'adfadfas',
    isLogin: false,
    name: '',
    image: ''
  },
  methods: {
    logout: function () {
      FB.logout(function (response) {
        console.log(response)
        location.reload()
      })
    },
    postStatus : function () {
      console.log('masuk');
      FB.api(
          "/me/feed",
          "POST",
          {
              "message": "ada sampah"
          },
          function (response) {
            if (response && !response.error) {
              console.log(`succsecc`);
            }
          }
      );
    },
    onFileChange(e) {
      // console.log(e);
      var files = e.target.files || e.dataTransfer.files;
      console.log(files);
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      // console.log(file);
      var image = new Image();
      var reader = new FileReader();

      var vm = this;

      reader.onload = (e) => {
        // console.log(e);
        vm.image = e.target.result;
        console.log(vm);
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = '';
    }
  }
})
