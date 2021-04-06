const login = require("facebook-chat-api");
const { email, password, person, identifier } = require("./settings.json").facebook;

function sendMessage(message, errorHandlerCallback, successHandlerCallback) {
    login({email: email, password: password}, (err, api) => {
        if(err) {
            errorHandlerCallback(err);
            return;
        }
    
        api.getUserID(person, (err, data)=>{
            if(err) {
                errorHandlerCallback(err);
                return;
            }
            const recipient = data.find(person => {
                return person.profileUrl.includes(identifier)
            });
            api.sendMessage(message, recipient.userID, (err, messageInfo) => {
                if(err) {
                    errorHandlerCallback(err);
                    return;
                }
                successHandlerCallback(messageInfo, message);
            });
        });
    });
}

module.exports = {
    sendMessage
}


// function sendMessage(message) {
//     return new Promise((ok, nook) => {
//         //    {email, password}
//         login({email: email, password: password}, (err, api) => {
//             if(err) {
//                 nook(err);
//                 return;
//             }
        
//             api.getUserID(person, (err, data)=>{
//                 if(err) {
//                     nook(err);
//                     return;
//                 }
//                 const recipient = data.find(person => {
//                     return person.profileUrl.includes(identifier)
//                 });
//                 api.sendMessage(message, recipient.userID, (err, messageInfo) => {
//                     if(err) {
//                         nook(err);
//                         return;
//                     }
//                     ok(message);
//                 });
//             });
//         });
//     });
// }
