var url = require("url");

module.exports = function(app) {

	//take every incoming request, log to console and send back to the chain via next()
	app.all("*", function(req, res, next){

		var path = req.url;
		var method = req.method;
		if(req.url != "/favicon.ico"){
    		console.log("--> a request was received for the url: " + url.parse(req.url).href + " as a " + method + " request via " + req.protocol + " protocol");
		}
		next();
	});


// main login page //

	app.get('/', function(req, res){
		res.send("index");
	});
}
