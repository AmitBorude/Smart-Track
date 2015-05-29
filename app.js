
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , UserHome = require('./routes/UserHome')
  , AddProperty = require('./routes/AddProperty');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

app.get('/index', routes.index);
app.get('/login', routes.login);
app.get('/create_account', routes.create_account);
app.get('/dashboard_homepage',routes.dashboard_homepage);
app.get('/map_page',routes.map_page);
app.get('/report',routes.report);
app.get('/guard_track',routes.guard_track);
app.get('/guard_list',routes.guard_list);
app.get('/maintenance_request',routes.maintenance_request);
app.get('/property_request',routes.property_request);
app.get('/messages',routes.messages);

app.post('/UserHome', UserHome.list);
app.post('/AddProperty', AddProperty.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
