var transporter = require('nodemailer').createTransport();

var express = require('express');
var app = express();
    app.enable('trust proxy');
    
var server = app.listen(process.env.PORT || 3002, function() {
	console.log('Listening on port %d', server.address().port);
});

 

app.get('/', function(req, res){
  res.send('Not Supported.');
});

app.post('/', function(req, res){
  console.log(req);
  setTimeout(function(){
  	res.send('#IDXFZEHDKFIF');
  	//todo random 1:1 fail:success  	
  },5000);
});

// setup e-mail data with unicode symbols
function sendmail(){	

	var mailOptions = {
	    from: 'Fred Foo ✔ <kontakt@zdf.de>', // sender address
	    to: 'adams.r@zdf.de', // list of receivers
	    subject: 'Hello ✔', // Subject line
	    text: 'Hello world ✔', // plaintext body
	    html: '<b>Hello world ✔</b>' // html body
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        console.log(error);
	    }else{
	        console.log('Message sent: ' , info);
	    }
	});
}


