import { createTransport } from 'nodemailer';

var transporter = createTransport(({
  service: 'gmail',
  auth: {
    user: 'cdacrec@gmail.com',
    pass: 'cdac_rec123#'
  }
}));

var mailOptions = {
  from: 'cdacrec@gmail.com',
  to: 'hemantdhumal57@gmail.com',
  subject: 'Sending Email using Node.js[nodemailer]',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 