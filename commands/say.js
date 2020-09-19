const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const sayMessage = args.join(" ");
  
  let channelToSend = message.mentions.channels.first();
  
  if (sayMessage !== ""){
    message.delete().catch(() => {});
    
    if (channelToSend != undefined){
      channelToSend.send(sayMessage.replace(channelToSend, ""));
    } else{
      message.channel.send(sayMessage);
    }
  }
}
