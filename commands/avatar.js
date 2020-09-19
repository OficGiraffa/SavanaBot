const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let embed = new Discord.MessageEmbed()
  .setTitle("Avatar do usuário")
  .setColor("RANDOM")
  .setImage(message.user.avatarURL)
  .setFooter("Por: " + message.author.username);
  
  message.channel.send(embed);
}