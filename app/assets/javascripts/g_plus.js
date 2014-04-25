function startTheShow() {
  console.log('starting the show');

  $('#signInButton').click(function () {
    gapi.auth.signIn({ 'callback': signInCallback });
  })
}

function signInCallback(authResult) {
  console.log(authResult);
  if (authResult['status']['signed_in']) {
    $('#signInButton').attr('style', 'display: none');
  } else {
    // Possible error values:
    //   "user_signed_out" - User is signed-out
    //   "access_denied" - User denied access to your app
    //   "immediate_failed" - Could not automatically log in the user
    console.log('Sign-in state: ' + authResult['error']);
  }
}
