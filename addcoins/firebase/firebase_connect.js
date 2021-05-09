const firebase = require('firebase');
const app = firebase.initializeApp({
	apiKey:" AIzaSyBA5U2auHtHVXysS5K6KMwATPPOV9ZnXcE",
	authDomain:"rewardwall-825cb.firebaseapp.com",
	databaseURL:"https://rewardwallngyvgy.firebaseio.com/",


});
module.exports = app;