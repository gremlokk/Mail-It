//https://medium.com/@mariusc23/send-an-email-using-only-javascript-b53319616782
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ryans.fredrick@gmail.com',
    pass: 'Fryans2017'
  }
});

var mailOptions = {
  from: 'ryans.fredrick@gmail.com',
  to: 'ryans.fredrick@gmail.com',
  subject: 'Mail it! Content Sent!',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
