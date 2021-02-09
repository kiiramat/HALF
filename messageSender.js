const login = require("facebook-chat-api");
const { email, password, person, identifier } = require("./settings.json")?.facebook;  // ? returns null if equire("./settings.json") doesn't exist

function sendMessage(message) {
    login({email: email, password: password}, (err, api) => {
        if(err) return console.error(err);
    
        api.getUserID(person, (err, data)=>{
            const recipient = data.find(person => {
                return person.profileUrl.includes(identifier)
            });
            api.sendMessage(message, recipient.userID);
        });
    });
}

module.exports = {
    sendMessage
}