const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const sayMessage = args.join(" ");
  let channelToSend = if 
  if (sayMessage !== ""){
    message.delete().catch(() => {});
    message.channel.send(sayMessage);
  }
}