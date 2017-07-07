var app = new Vue({
  el: '#app',
  data: {
    message: 'adfadfas',
    isLogin: false,
    name: '',
    image: '',
    msgAlert: "",
    geoLokasi: "",
    time: new Date()
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
            console.log(response);
            if (response && !response.error) {
              console.log(`succsecc`);
            }
          }
      );
    },
    onFileChange(e) {
      let self = this
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
      let storage = firebase.storage()
      let storageRef = storage.ref(`/laporan/${e.target.files[0].name}`)
      storageRef.put(e.target.files[0])
      .then(function() {
        storageRef.getDownloadURL().then(function(url) {
          self.recogImage(url);
        })
      })
    },
    createImage(file) {
      // console.log(file);
      var image = new Image();
      console.log(image.src);
      var reader = new FileReader();

      var vm = this;
      console.log(vm);

      reader.onload = (e) => {
        // console.log(e);
        vm.image = e.target.result;
        // console.log(vm);
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = '';
    },
    recogImage: function(url) {
      let self = this
      axios.post('http://moontrashtk-in.cloud.revoluz.io:49392/analyze-picture', {
        img: url
      })
      .then(function(response) {
        console.log("------------------ berhasil di analisis -------------------");
        console.log(response);
        response.data.forEach( x => {
          if (x.class == "garbage heap" && x.score > 0.5) {
            self.msgAlert = "Telah di temukan TUMPUKAN sampah dengan intensitas " + x.score*100 + "%"
            self.postFacebook()
          } else if (x.class == "Garbage" && x.score > 0.5) {
            self.msgAlert = "Telah di temukan sampah dengan intensitas " + x.score*100 + "%"
            self.postFacebook()
          } else {
            self.msgAlert = "Hmmm, sepertinya sampah tidak di temukan"
          }
        })
      })
    },
    postFacebook: function() {
      let postingan = this.msgAlert + " di " + this.geoLokasi + " " + this.time
      console.log(postingan);
      FB.api(
          "/me/feed",
          "POST",
          {
              "message": postingan,
              "with": "location"
          },
          function (response) {
            console.log(response);
            if (response && !response.error) {
              console.log(`succsecc`);
            }
          }
      );
    },
    getLokasi: function() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
          this.geoLokasi = "Geolocation is not supported by this browser.";
      }
    },
    showPosition: function(position) {
      let self = this
      axios.get(`http://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&sensor=true`)
      .then(function(response) {
        console.log(response.data.results[0].formatted_address);
        self.geoLokasi = response.data.results[0].formatted_address
      })
    }
  },
  created: function() {
    console.log("created coyy");
    firebase.initializeApp(config);
    this.getLokasi()
  }
})
