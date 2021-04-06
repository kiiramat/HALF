"use strict";

const nodemailer = require("nodemailer");
const { host, port, secure, username, password, recipient } = require("./settings.json").email;

async function sendMail(subject, message){
    // connection to a server using SMTP
    let transporter = nodemailer.createTransport({
        host: host,
        port: port,
        secure: secure,
        auth: {
            user: username,
            pass: password
        }
    });

    try{
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: `HALF Monitoring <${username}>`,
            to: recipient,
            subject: subject,
            text: message,
            html: message
        });
        console.log("message sent: %s", info.messageId);
    } catch(e) {
        console.error(e);
    }
}

module.exports = {
    sendMail
}