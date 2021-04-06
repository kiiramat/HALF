const messageSender = require("./messageSender");
const randomMessage = require("./messageGenerator");
const emailSender = require("./emailSender")

const messageToSend = randomMessage.getMessage();
messageSender.sendMessage(
    messageToSend,
    (err) => {
        emailSender.sendMail("HALF: Message not sent", err);
    },
    (messageInfo, message) => {
        emailSender.sendMail("HALF: Message sent", message);
    });


// const run = () => {
//     const messageToSend = randomMessage.getMessage();
//     messageSender.sendMessage(messageToSend)
//         .then((message) => {
//             emailSender.sendMail("HALF: Message sent", message);
//         })
//         .catch((err) => {
//             emailSender.sendMail("HALF: Message NOT sent", err);
//         });
// }

// const run = async () => {
//     const messageToSend = randomMessage.getMessage();
//     try{
//         const message = await messageSender.sendMessage(messageToSend);
//         emailSender.sendMail("HALF: Sent", message);
//     } catch(err) {
//         emailSender.sendMail("HALF: Not sent", err);
//     }
// }

// run();