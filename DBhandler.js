var ejs = require("ejs");

exports.LogInUser = LogInUser;
exports.AddProperty = AddProperty;

function LogInUser(callback, username, password) {
	var mysql = require('mysql');
	var sendName = "";

	var connection = mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : 'GANESH',
		port : '3306',
		database : 'Smart Guard'
	});
	var flag = false;
	var sql1 = "select username from user_credentials where username='" + username
			+ "' and password='" + password + "'";

	connection.query(sql1, function(err, rows, fields) {
		if (rows.length != 0) {
			console.log("Got all values");
			sendName = rows[0].username;
			console.log(sendName);
			flag = true;
			
			var sql2 = "select * from property_details";
			connection.query(sql2, function(err, rows1, fields) {
			console.log("Salman");
			console.log(rows1[0].PROPERTY_NAME);
			callback(flag, sendName, rows1);
			});
		} else {
			console.log("Error:");
			flag = false;
			callback(flag, sendName, "");
		}
	});
}


function AddProperty(callback, propertyno, propertyname, contactname, contactno, address, comments, updatedate, propdetails)
{
	var mysql = require('mysql');

	var connection = mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : 'GANESH',
		port : '3306',
		database : 'Smart Guard'
	});
	var flag = false;
	
	console.log("Before Insert Query");
	console.log(propertyno+" "+propertyname+" "+contactname+" "+contactno);
	
	
	
	
	var sql1 = "Insert into property_details (PROPERTY_NO, PROPERTY_NAME, CONTACT_NAME, CONTACT_NUMBER, ADDRESS, COMMENTS, UPDATE_DATE, PROPERTY_DETAILSCOL) values('"
	+ propertyno 
	+  "','"
	+ propertyname
	+  "','"
	+ contactname
	+ "','" 
    + contactno
	+ "','" 
    + address
	+ "','" 
	+ comments
	+ "','"
	+ updatedate
	+ "','"
	+ propdetails
	+"')";
	
	console.log(sql1);

	connection.query(sql1, function(err, rows, fields) {
		if (rows.length != 0) {
			flag = true;
			var sql2 = "select * from property_details";
			connection.query(sql2, function(err, rows1, fields) {
			callback(flag, rows1);
			});
		}else {
			flag = false;
			callback(flag, "");
		}
	});
}


