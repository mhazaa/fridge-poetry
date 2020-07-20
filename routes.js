var routes = function(app){
  app.use(function(req, res, next){
  	if (req.secure){
  		next();
    } else {
  		res.redirect('https://' + req.headers.host + req.url);
    }
  });

  app.get('', function(req, res){
  	res.render('./index', {});
  });
  app.get('/home', function(req, res){
  	res.redirect('/');
  });
}

module.exports = routes;
