const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let embed_help_1 = new Discord.MessageEmbed()
  .setTitle("Ajuda do bot!")
  .setColor("RANDOM")
  .setDescription(`👋Bem vindo ` +
                  "👉Sobre mim: \n" +
                  "Sou um bot de discord feito por @Ofic_Giraffa apenas para estudos.\n" + 
                  "\n" +
                  "💼Comandos:\n" + 
                  "🎭 - Diversão\n" +
                  "🎲 - Funções Básicas\n" + 
                  "🚦 - Gerenciamento\n")
  .setFooter("Por: " + message.author.username);
  
  let messageEmbed = await message.channel.send(embed_help_1);
  messageEmbed.react("⬅️");
  messageEmbed.react("🎭");
  messageEmbed.react("🎲");
  messageEmbed.react("🚦");
  
  let embed_help_2 = new Discord.MessageEmbed()
  .setTitle("Ajuda do bot!")
  .setColor("RANDOM")
  .setDescription("👋Bem-vindo @" + message.author.tag + " a central de comandos de diversão!\n" +
                  "\n" +
                  "💼Comandos:\n" + 
                  "👋 =bater - Bate num otário!\n" +
                  "😍 =beijar - Com todo amor!\n" +
                  "🤑 =cara_ou_coroa - Bom pra apostas!\n" +
                  "☭  =comida_soviética - Nossa comida.\n" +
                  "🚬 =fumar - Hm, cancêr!\n")
  .setFooter("Por: " + message.author.username);
  
  let embed_help_3 = new Discord.MessageEmbed()
  .setTitle("Ajuda do bot!")
  .setColor("RANDOM")
  .setDescription("👋Bem-vindo @" + message.author.tag + " a central de comandos funções básicas!\n" +
                  "\n" +
                  "💼Comandos:\n" + 
                  "😶 =avatar - Mostra o seu avatar ou de alguém mencionado\n" +
                  "😀 =falar - Fala algo no mesmo canal escrito este comando ou num mencionado\n")
  .setFooter("Por: " + message.author.username);
  
   let embed_help_4 = new Discord.MessageEmbed()
  .setTitle("Ajuda do bot!")
  .setColor("RANDOM")
  .setDescription("👋Bem-vindo @" + message.author.tag + " a central de comandos de gerenciamento! \n" +
                  "\n" +
                  "💼Comandos:\n" + 
                  "✋ =ajuda - Ajuda ;)"
                  )
  .setFooter("Por: " + message.author.username);


  client.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    
    if (user.bot) return;
    if (!reaction.message.channel) return;
    
    if (reaction.emoji.name === "🎭"){
      messageEmbed.edit(embed_help_2);
    }
    if (reaction.emoji.name === "🎲"){
      messageEmbed.edit(embed_help_3);
    }
    if (reaction.emoji.name === "🚦"){
      messageEmbed.edit(embed_help_4);
    }
    if (reaction.emoji.name === "⬅️"){
      messageEmbed.edit(embed_help_1);
    }
  })
}