const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/partials');

// hbs.registerHelper('pageTitle', {
// 	pageTitle:'Home Page'
// });

// hbs.registerHelper('getFullYear', {
// 	return new Date().getFullYear();
// });

app.get('/',(req,res)=>{
	res.send('Hello Express');	
	// res.render('home.html');	
});


app.listen(3000);