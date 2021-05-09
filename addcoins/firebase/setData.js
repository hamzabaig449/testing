const firebase = require("./firebase_connect");

module.exports = {
	saveData: function(req,callback){
		let uid = req.uid;
		firebase.database().ref("users/"+uid).set({
			uid:req.uid,
			coins:req.coins,
			username:req.username,
		});
		callback(null,{"statuscode":200,"message":"Inserted"})	
	}
}