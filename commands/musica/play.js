const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let voice_channel = message.member.voice.channel;
  message.reply(`Você está no canal: ${voice_channel}`);
}