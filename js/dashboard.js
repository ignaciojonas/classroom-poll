// Initialize Firebase
var config = {
  apiKey: "AIzaSyAo9nOvW2v22yQzRB_UWA-OOnYnM0C39xQ",
  authDomain: "test-project-90ffa.firebaseapp.com",
  databaseURL: "https://test-project-90ffa.firebaseio.com",
  storageBucket: "test-project-90ffa.appspot.com",
};
firebase.initializeApp(config);

var database = firebase.database();

$('#Reset').click(function(){
  database.ref('poll1').set({
      yes: 0,
      no: 0,
      maybe : 0
    });
});
