$(function() {
  $('#signInButton').click(function () {
    attributes = {
      'callback': signInCallback,
      'accesstype': 'offline',
      'approvalprompt': 'force',
      'responsetype': 'code',
      'scope': 'email profile',
    }

    gapi.auth.signIn(attributes);
  })

  function signInCallback(authResult) {
    code = gapi.auth.getToken().code
    request = gapi.client.request({
      'path': 'https://accounts.google.com/o/oauth2/token',
      'method': 'POST',
      'params': {
         'code': code,
         'client_id': "674771599264.apps.googleusercontent.com",
         'client_secret': '7eCGkk5N3A1JaKr4iidK-EBJ',
         'redirect_uri': 'http://lvh.me:3002',
         'grant_type': 'authorization_code',
      },
      'headers': {
        'Content-type': 'application/json'
      }
    })
    request.execute(function(response, raw) {
      console.log(response);
    })
  }
})
