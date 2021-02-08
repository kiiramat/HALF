const MESSAGES = require("./messages.json");

function actualDate() {
    let dt = new Date();
    return `${dt.getMonth()+1}-${dt.getDate()}`
}

function createRandomizedMessage () {
    const messageGreeting = MESSAGES.greetings[Math.floor(Math.random() * MESSAGES.greetings.length)]
    const getMessageByDate = MESSAGES[actualDate()];
    const messageBody = getMessageByDate[Math.floor(Math.random() * getMessageByDate.length)]
    return `${messageGreeting}\n${messageBody}` 
}

module.exports = {
    getMessage: createRandomizedMessage
};