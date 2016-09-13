// Initialize Firebase
var config = {
  apiKey: "AIzaSyAo9nOvW2v22yQzRB_UWA-OOnYnM0C39xQ",
  authDomain: "test-project-90ffa.firebaseapp.com",
  databaseURL: "https://test-project-90ffa.firebaseio.com",
  storageBucket: "test-project-90ffa.appspot.com",
};
firebase.initializeApp(config);

var database = firebase.database();

function disableButtons(){
  $('input[type=button]').attr("disabled", "disabled");
}

$('#Yes').click(function(){
  database.ref('poll1/yes').transaction(function(current_value) {
      return current_value + 1;
  });
  disableButtons();
});

$('#No').click(function(){
  database.ref('poll1/no').transaction(function(current_value) {
      return current_value + 1;
  });
  disableButtons();
});

$('#Maybe').click(function(){
  database.ref('poll1/maybe').transaction(function(current_value) {
      return current_value + 1;
  });
  disableButtons();
});
