const messageSender = require("./messageSender");
const randomMessage = require("./messageGenerator");


messageSender.sendMessage(randomMessage.getMessage());