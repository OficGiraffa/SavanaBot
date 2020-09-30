const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let embed_help_1 = new Discord.MessageEmbed()
    .setImage("https://cdn.glitch.com/28f5b8c8-6c5d-429f-ac49-78ea7d1a2686%2Fsite_banner.png?v=1601475544932")
    .setTitle("Informações: ")
    .setColor("RANDOM")
    .setDescription(
      `👋Bem vindo <@${message.author.id}>, aqui você pode ver algumas informações sobre mim S2\n` +
        "👉Sobre mim: \n" +
        "Sou um bot de discord feito por @Ofic_Giraffa e @patin apenas para estudos.\n\n" +
        "Então ele é bem simples e possui alguns problemas (vários)\n" +
        "Caso você encontre algum problema, contate-me em: \n" +
        "horrordaygames@gmail.com (Meu e-mail não muito profissional :| )\n\n" +
        "👉Você sabia?: \n" +
        "👉Eu fui feito em ``JS``!\n" +
        "👉O @ofic_giraffa e o @patin não são furrys!\n" +
        "👉Beba água :) S2\n\n" +
        "👉Futura atualização: SISTEMA DE ECONOMIA! \n\n" +
        `+++Me adicione: https://discord.com/api/oauth2/authorize?client_id=756590483165151302&permissions=8&scope=bot +++`
    )
    .setFooter("Por: " + message.author.username);
  
  message.channel.send(embed_help_1);
}