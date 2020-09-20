const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let embed_help_1 = new Discord.MessageEmbed()
  .setTitle("Ajuda do bot!")
  .setColor("RANDOM")
  .setDescription("Obrigado por adicionar o SavanaBot ao seu servidor!\nFeito por: @Ofic_Giraffa | PREFIXO: = | Comandos:\n```-ajuda\n-avatar\n-falar\n-cara_ou_coroa\n-comida_soviética\n-fumar```")
  .setFooter("Por: " + message.author.username);
  
  message.channel.send(embed_help_1);
}