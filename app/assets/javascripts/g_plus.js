$(function() {
  $('#signInButton').click(function () {
    attributes = {
      'callback': signInCallback,
      'accesstype': 'offline',
      'scope': 'email profile',
    }

    gapi.auth.signIn(attributes);
  })

  function signInCallback(authResult) {
    $.ajax({ url: '/get_refresh_token',
      type: 'POST',
      data: { access_token: authResult['access_token'],
        code: authResult['code'],
        id_token: authResult['id_token']
      }
    })
  }
})
