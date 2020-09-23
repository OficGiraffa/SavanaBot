const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let channel_lock = message.mentions.channels.first() || message.channel;
  
  try {
    console.log(message.guild.roles.cache);
    channel_lock.overwritePermissions({
      SEND_MESSAGES: false,
      VIEW_CHANNEL: false
    })
  } finally {
    message.channel.send(`<#${channel_lock.id}> fechado com sucesso! 🔥`);
  }
}