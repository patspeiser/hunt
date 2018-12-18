const express = require('express');
const app = express();

module.exports = app;

app.use(express.static('node_modules'))
app.use(express.static('browser'))
app.use('/api', require('./routes'));

app.get('/', function(req, res, next){
	res.sendFile('/browser/index.html', {root: './' });
});