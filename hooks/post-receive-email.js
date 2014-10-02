var nodemailer = require('nodemailer');

//var wellknown = require('nodemailer-wellknown');
//var config = wellknown('Gmail');

var smtpTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'alberto.fernandez@optivamedia.com',
        pass: ''
    }
});

smtpTransporter.sendMail({
			    from: 'alberto.fernandez@optivamedia.com',
			    to: 'ivan.lopez@optivamedia.com, alberto.fernandez@optivamedia.com',
			    subject: 'hello',
			    text: 'hello world!'
		},
		function(error, info){
		    if(error){
		        console.log(error);
		    }else{
		        console.log('Message sent: ' + info.response);
		    }
		}
);

/*var smtpTransporter = nodemailer.createTransport("SMTP",{
    host: "smtp.gmail.com", // hostname
    secureConnection: false,
    port: 587, // port for secure SMTP
    requiresAuth: true,
    domains: ["gmail.com", "googlemail.com"],
        auth: {
        user: "alberto.fernandez@optivamedia.com",
        pass: "maritaa8"
    }
});*/

/*var transporter = nodemailer.createTransport();
transporter.sendMail({
    from: 'alberto.fernandez@optivamedia.com',
    to: 'alberto.fernandez@optivamedia.com',
    subject: 'hello',
    text: 'hello world!'
});*/
