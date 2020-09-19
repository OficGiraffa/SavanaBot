const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const sayMessage = args.join(" ");
  
  let channelToSend = message.mentions.channels.first();
  
  if (sayMessage !== ""){
    message.delete().catch(() => {});
    
    let embed = new Discord.MessageEmbed()
    .setDescription(sayMessage.replace(channelToSend, ""))
    .setColor("RANDOM")
    .setFooter("Por: " + message.author.username);
    
    if (channelToSend != undefined){
      channelToSend.send(embed);
    } else{
      message.channel.send(embed);
    }
  }
}
