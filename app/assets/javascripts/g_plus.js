  function render() {
    attributes = {
      'clientid': "674771599264.apps.googleusercontent.com",
      'callback': signInCallback,
      'accesstype': 'offline',
      'scope': 'email profile',
    }

    gapi.signin.render('signInButton', attributes)
  };

  function signInCallback(authResult) {
    console.log(authResult);
  }
