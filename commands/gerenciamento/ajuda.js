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
  
  let messageEmbed = await message.channel.send(embed_help_1);
  messageEmbed.react("🎭");
  messageEmbed.react("🎲");
  messageEmbed.react("🚦");

  client.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    
    if (user.bot) return;
    if (!reaction.message.channel) return;
    
    if (reaction.emoji.name === "🎭"){
      reaction.message.channel.send ("Entrou em diversão");
    }
    if (reaction.emoji.name === "🎲"){
      reaction.message.channel.send ("Entrou em Funções Básicas");
    }
    if (reaction.emoji.name === "🚦"){
      reaction.message.channel.send ("Entrou em Gerenciamento");
    }
  })
}