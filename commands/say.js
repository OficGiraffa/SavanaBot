const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const sayMessage = args.join(" ");
  
  let channelToSend = message.mentions.channels.length;
  console.log (channelToSend);
  
  
  if (sayMessage !== ""){
    message.delete().catch(() => {});
    
    let embed = new Discord.MessageEmbed()
    .setDescription(sayMessage)
    .setColor("RANDOM")
    .setFooter("Por: " + message.author.username);
    
    
  }
}
