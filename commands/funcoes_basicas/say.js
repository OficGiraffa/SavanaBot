const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if (message.member.permissions.has("MANAGE_MESSAGES")){
    const sayMessage = args.join(" ");

    let channelToSend = message.mentions.channels.first() || message.channel; 

    if (sayMessage !== ""){
      try{
        channelToSend.send(sayMessage.replace(channelToSend, ""));
      } finally {
        message.channel.send("Mensagem de: " + message.author.username + " no canal: " + sayMessage.channel + " enviada com sucesso! 🔥")
      }
    }
    
  }
}