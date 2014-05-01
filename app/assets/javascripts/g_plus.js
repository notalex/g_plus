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
    console.log(authResult);
    gapi.client.load('plus','v1', function(){
      var request = gapi.client.plus.people.get({'userId': 'me'});

      request.execute(function(resp) {
        console.log(resp);
      });
    });
  }
})
