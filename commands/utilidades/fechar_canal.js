const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if (message.member.permissions.has("ADMINISTRATOR")){
    let channel_lock = message.mentions.channels.first() || message.channel;

    try {
      channel_lock.overwritePermissions([{
        id: message.guild.roles.everyone.id,
        deny: ['SEND_MESSAGES']
      }]);
    } finally {
      message.channel.send(`<#${channel_lock.id}> fechado com sucesso! 🔥`);
    }
  } else {
    message.reply("Hei! Você não pode fechar canais! 😑");
  }
}