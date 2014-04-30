$(function() {
  $('#signInButton').click(function () {
    gapi.auth.signIn({ 'callback': signInCallback });
  })

  function signInCallback(authResult) {
    gapi.client.load('plus','v1', function(){
      var request = gapi.client.plus.people.get({'userId': 'me'});

      request.execute(function(resp) {
        console.log(resp);
      });
    });
  }
})
