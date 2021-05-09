const firebase = require("./firebase_connect");
module.exports = {
	_updateData: function(req,callback){
		let uid = req.uid;
		let coins = req.coins;
		firebase.database().ref("users/"+uid+"/").update({
			coins: coins
		});
		callback("success");
	}
}