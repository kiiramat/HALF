"use strict";

const nodemailer = require("nodemailer");
const { host, port, secure, username, password } = require("./settings.json")?.email;

async function sendMail(message){
    let transporter = nodemailer.createTransport({
        host: host,
        port: port,
        secure: secure,
        auth: {
            user: username,
            pass: password
        }
    });
}