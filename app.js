var transporter = require('nodemailer').createTransport();

var express = require('express');
var app = express();
    app.enable('trust proxy');
    
    app.use('/',express.static(__dirname+'/client'));


// var server = app.listen(process.env.PORT || 3000, function() {
//     console.log('Listening on port %d', server.address().port);
// });

// create reusable transporter object using SMTP transport

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'Fred Foo ✔ <kontakt@zdf.de>', // sender address
    to: 'adams.r@zdf.de', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ✔', // plaintext body
    html: '<b>Hello world ✔</b>' // html body
};


function sendmail(){	
	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        console.log(error);
	    }else{
	        console.log('Message sent: ' , info);
	    }
	});
}

sendmail();