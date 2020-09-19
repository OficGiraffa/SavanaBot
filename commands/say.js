const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const sayMessage = args.join(" ");
  
  let channelToSend = message.content.mentions.channels.first;
  
  if (sayMessage !== ""){
    message.delete().catch(() => {});
    
    let embed = new Discord.MessageEmbed()
    .setDescription(sayMessage)
    .setColor("RANDOM")
    .setFooter("Por: " + message.author.username);
    
    
  }
}
