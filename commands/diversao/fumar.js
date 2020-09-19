const Discord = require("discord.js");
//🚬 💨   💨   💨 
module.exports.run = async (client, message, args) => {
  message.channel.send("🚬").then(() => {  
    client.util.delayFor(100)
    .edit("🚬 💨");
  })
}