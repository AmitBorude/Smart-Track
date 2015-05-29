
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.login = function(req, res){
  res.render('login');
};

exports.create_account = function(req, res){
  res.render('create_account');
};

exports.dashboard_homepage = function(req, res){
  res.render('dashboard_homepage');
};

exports.map_page = function(req, res){
  res.render('map_page');
};

exports.gaurd_track = function(req, res){
  res.render('gaurd_track');
};

exports.report = function(req, res){
  res.render('report');
};

exports.guard_track = function(req, res){
  res.render('guard_track');
};

exports.messages = function(req, res){
  res.render('messages');
};

exports.guard_list = function(req, res){
  res.render('guard_list');
};
	
exports.maintenance_request = function(req, res){
	 res.render('maintenance_request');
};
		
exports.property_request = function(req, res){
	  res.render('property_request');
	};
			





