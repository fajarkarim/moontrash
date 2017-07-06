function statusChangeCallback (response) {
  console.log('statusChangeCallback')
  console.log(response)

  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    testAPI()
  } else {
    // The person is not logged into your app or we are unable to tell.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this app.'
  }
}

function checkLoginState () {
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response)
  })
}

window.fbAsyncInit = function () {
  FB.init({
    appId: '311509492641739',
    cookie: true,
    xfbml: true,
    version: 'v2.8'
  })

  FB.getLoginStatus(function (response) {
    statusChangeCallback(response)
  })
}

// Load the SDK asynchronously
(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) return
  js = d.createElement(s); js.id = id
  js.src = '//connect.facebook.net/en_US/sdk.js'
  fjs.parentNode.insertBefore(js, fjs)
}(document, 'script', 'facebook-jssdk'))

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI () {
  console.log('Welcome!  Fetching your information.... ')
  FB.api('/me?fields=email,name,gender', function (response) {
    console.log(response)

    document.getElementById('status').innerHTML =
      'Thanks for logging in, ' + response.email + '!'
  })
}
