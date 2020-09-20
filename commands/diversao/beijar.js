const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let kissTo = message.metions.users.first || 
  
  let embed = new Discord.MessageEmbed()
  .setTitle("Beijo amoroso 😍! De " + )
  .setColor("PINK")
  .setImage("https://media.giphy.com/media/l2Je2M4Nfrit0L7sQ/source.gif")
  .setFooter("Por: " + message.author.username);
  
  message.channel.send(embed);
  
}