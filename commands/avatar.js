const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let embed = new Discord.MessageEmbed()
  .setTitle("Avatar do usuário")
  .setColor("RANDOM")
  .setImage(message.author.displayAvatarURL)
  .setFooter("Por: " + message.author.username);
  
  console.log(message.author.displayAvatarURL);
  
  message.channel.send(embed);
}