const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const sayMessage = args.join(" ");
  if (sayMessage !== ""){
    message.delete().catch(() => {});
    
    let embed = new Discord.MessageEmbed()
    .setDescription(sayMessage)
    .setColor("RANDOM")
    .setFooter("Por: " + message.author.username);
    
    message.channel.send(embed);
  }
}
