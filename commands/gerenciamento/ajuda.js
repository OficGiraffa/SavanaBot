const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let embed_help_1 = new Discord.MessageEmbed()
  .setTitle("Ajuda do bot!")
  .setColor("RANDOM")
  .setDescription("👋Bem-vindo @" + message.author.tag + " a central de ajuda e comandos!\n" +
                  "👉Sobre mim: \n" +
                  "Sou um bot de discord feito por @Ofic_Giraffa apenas para estudos.\n" + 
                  "\n" +
                  "💼Comandos:\n" + 
                  "🎭 - Diversão\n" +
                  "🎲 - Funções Básicas\n" + 
                  "🚦 - Gerenciamento\n")
  .setFooter("Por: " + message.author.username);
  
  let messageEmbed1 = await message.channel.send(embed_help_1);
  messageEmbed1.react("🎭");
  messageEmbed1.react("🎲");
  messageEmbed1.react("🚦");

  client.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    
    if (user.bot) return;
  })
}