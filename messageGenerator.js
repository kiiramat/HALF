const MESSAGES = require("./messages.json");

function actualDate() {
    let dt = new Date();
    return `${dt.getMonth()+1}-${dt.getDate()}`
}

function createRandomizedMessage () {
    const messageGreeting = MESSAGES.greetings[Math.floor(Math.random() * MESSAGES.greetings.length)]
    const messageForDate = MESSAGES[actualDate()];
    const messageBody = messageForDate[Math.floor(Math.random() * messageForDate.length)]
    return `${messageGreeting}\n${messageBody}` 
}

module.exports = {
    getMessage: createRandomizedMessage
};