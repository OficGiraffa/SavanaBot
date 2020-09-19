const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let embed_help_1 = new Discord.MessageEmbed()
  .setTitle("Ajuda do bot!")
  .setColor("RANDOM")
  .setDescription("Obrigado por adicionar o SavanaBot ao seu servidor!\nFeito por: @Ofic_Giraffa | Comandos:\n")
  .setFooter("Por: " + message.author.username);
}