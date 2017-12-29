//https://medium.com/@mariusc23/send-an-email-using-only-javascript-b53319616782
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_username',
    pass: 'your_password'
  }
});

var mailOptions = {
  from: 'your_email',
  to: 'some_email',
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
