const firebase = require('firebase');

module.exports = {
	_getData: function(callback){
		firebase.database().ref("user/").once("value").then(function(snapshot){

			callback(snapshot.val());
		})
	}
}