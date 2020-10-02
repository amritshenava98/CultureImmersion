var firebaseConfig = {
    apiKey: "AIzaSyCdZIC6Ypdtc4quzt6IieEyDrzfNfa9GOo",
    authDomain: "culture-immersion.firebaseapp.com",
    databaseURL: "https://culture-immersion.firebaseio.com",
    projectId: "culture-immersion",
    storageBucket: "culture-immersion.appspot.com",
    messagingSenderId: "653830321597",
    appId: "1:653830321597:web:8ab0499d3a8612049d8ed4",
    measurementId: "G-EWM6G8X6PW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics()

function searchInfo(){
  var search_info = document.getElementById('search-info');
  if(search_info == 'India'){
       
  }
}

var typed = new Typed('.element', {
  strings: ['India', 'United Arab Emirates', 'Kenya', 'Nigeria', 'United States of America', 'United Kingdom'],
  smartBackspace: true,
  typeSpeed: 60,
  backSpeed: 60,
  loop: true // Default value
});