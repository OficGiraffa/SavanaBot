const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let embed_help_1 = new Discord.MessageEmbed()
  .setTitle("Ajuda do bot!")
  .setColor("RANDOM")
  .setDescription("Obrigado por colocar o SavanaRound`` no seu servidor!\n" +
                  "O prefixo inicial é: =\n" +
                  "Comandos:\n" + 
                  "           ")
  .setFooter("Por: " + message.author.username);
  
  message.channel.send(embed_help_1);
}