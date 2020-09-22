const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if (message.member.permissions.has("MANAGE_MESSAGES")){
    const sayMessage = args.join(" ");

    let channelToSend = message.mentions.channels.first() || message.channel; 

    if (sayMessage !== ""){
      try{
        channelToSend.send(sayMessage.replace(channelToSend, ""));
      } catch(err) {
        message.channel.send("Algo correu mal ao tentar enviar a mensagem! :(");
      } finally {
        message.channel.send(`Mensagem de <@${message.author.id}> no canal <#${channelToSend.id}> enviada com sucesso!🔥`);
      } 
    } 
  } else {
    message.author.reply(`Desculpe <@${message.author.id}>! Você não tem permissão pra isso!`);
  }
}