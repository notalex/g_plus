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
    $.ajax({ url: '/users',
      type: 'POST',
      data: { code: authResult['code'] }
    })
  }
})
