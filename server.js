const server = require('http').createServer(require('./app'));
const db = require('./db').db;
const port = process.env.PORT || 3000;

if (process.env.SYNC){
	db.sync()
		.then(function(){
			console.log('database sync complete');
		})
		.catch(function(err){
			console.error(err);
		})
}

server.listen(port, function(){
	console.log('server listening on ' + port);
});