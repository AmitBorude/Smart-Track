/**
 * New node file
 */



var mysql = require("../DBhandler");

exports.list = function(req, res) {
	console.log(req.param("username"), req.param("password"));
	mysql.LogInUser(function(flag, name, property){    
		if (flag === true) {
			res.render('property_list.ejs', {
				name : name,
				property : property
			});
		} else {
			res.render('index.ejs', {
				title : "Error"
			});
		}
	}, req.param("username"), req.param("password"));

};
