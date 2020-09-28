const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if (message.member.permissions.has("ADMINISTRATOR")){
    let channel_open = message.mentions.channels.first() || message.channel;

    try {
       channel_open.overwritePermissions([{
         id: message.guild.roles.everyone.id,
         allow: ['SEND_MESSAGES', 'VIEW_CHANNEL']
       }]);
    } finally {
      message.channel.send(`<#${channel_open.id}> aberto com sucesso! 🔥`);
    }
  } else {
    message.reply("Hei! Você não pode abrir canais! 😑");
  }
}