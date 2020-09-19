const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let result = Math.floor(Math.random() * 2) + 1;
  message.channel.send (result);
}