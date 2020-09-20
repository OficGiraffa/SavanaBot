const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let embed_help_1 = new Discord.MessageEmbed()
  .setTitle("Ajuda do bot!")
  .setColor("RANDOM")
  .setDescription("w",
                  "w"
                  "d")
  .setFooter("Por: " + message.author.username);
  
  message.channel.send(embed_help_1);
}