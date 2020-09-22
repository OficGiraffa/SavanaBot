const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) 
    return message.reply(`Desculpe <@${message.author.id}> você não tem permissão para isso!`);
}