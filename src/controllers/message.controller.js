var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
require('dotenv').config();

let transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
}));


const send = (req, res) => {
    sendMessage(req)
    res.status(200).send({status: 200, message: "message sent"});
}

function sendMessage(req) {
    let {firstName, lastName, email, subject, message, isChecked} = req.body;

    var mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject: subject,
        html: message
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            return false
        } else {
            return true
        }

    });
}


module.exports = {
    send
}
