$(function() {
  $('#signInButton').click(function () {
    gapi.auth.signIn({ 'callback': signInCallback });
  })

  function signInCallback(authResult) {
    if (authResult['status']['signed_in']) {
      console.log(gapi.auth.getToken().access_token);
    } else {
      // Possible error values:
      //   "user_signed_out" - User is signed-out
      //   "access_denied" - User denied access to your app
      //   "immediate_failed" - Could not automatically log in the user
      console.log('Sign-in state: ' + authResult['error']);
    }
  }
})
