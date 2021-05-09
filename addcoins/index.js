const functions = require('firebase-functions');
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const ofirebase = require('./firebase/setData');
const ogetData = require('./firebase/getData');
const updateData = require('./firebase/updateData');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:true
}));

app.listen(port,function(err,data){
	if(err)
	{
		console.log(err);
	}
	else
	{
		console.log("connected");
	}
});

// Insert Data

app.get('/saveData/',function(req,res){
	
	 ofirebase.saveData(req.query,function(err,data){
	  	res.send(data);
	 })
	
	
})


// Fetching data from firebase


app.get("/userData/",function(req,res){
	ogetData._getData(function(data){
		res.send({"status":"200","statuscode":"1","result":data});
	})
})


/*Update Data*/

app.get("/updateData/",function(req,res){
	updateData._updateData(req.query,function(data){
		res.send({"status":"200","statuscode":"1","message":"User Data updated Successfully"});
	})
})