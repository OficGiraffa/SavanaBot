const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  message.channel.createWebhook("SUPER XANDÃO", {
    avatar: ""
  })
}