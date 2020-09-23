const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let channel_lock = message.mentions.channels.first() || message.channel;
  
  try {
    message.channel.overwritePermissions('739839423612452954', { SEND_MESSAGES: true, ADD_REACTIONS: false});
  } finally {
    message.channel.send(`<#${channel_lock.id}> fechado com sucesso! 🔥`);
  }
}