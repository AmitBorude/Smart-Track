/**
 * New node file
 */

var mysql = require("../DBhandler");
exports.list = function(req, res) {
	console.log(req.param("propertyno"), req.param("propertyname"), req.param("contactname"),
			req.param("contactno"), req.param("address"), req.param("comments"), req.param("updatedate"), req.param("propdetails"));
	mysql.AddProperty(function(flag, property){    
		if (flag === true) {
			res.render('UserHome.ejs', {
				property :property
			});
		} else {
			res.render('UserHome.ejs', {
				title : "Error"
			});
		}
	}, req.param("propertyno"), req.param("propertyname"), req.param("contactname"),
	req.param("contactno"), req.param("address"), req.param("comments"), req.param("updatedate"), req.param("propdetails"));
};
