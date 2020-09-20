const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let kissTo = message.mentions.users.first() || message.author;
  
  let embed = new Discord.MessageEmbed()
  .setTitle("Beijo amoroso 😍! De " + message.author.username + " para " + "@" + kissTo.username)
  .setColor("PINK")
  .setImage("https://media.giphy.com/media/l2Je2M4Nfrit0L7sQ/source.gif")
  .setFooter("Por: " + message.author.username);
  
  message.channel.send(embed);
  
}