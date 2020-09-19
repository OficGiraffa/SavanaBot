const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const sayMessage = args.join(" ");
  
  let channelToSend = message.mentions.channels.first() || message.channel; 
  
  if (sayMessage !== ""){
      channelToSend.send(sayMessage.replace(channelToSend, ""));
    }
}
