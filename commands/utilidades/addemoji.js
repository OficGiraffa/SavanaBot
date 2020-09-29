const Discord = require("discord.js");

module.exports.run = async (message, client, args) => {
  //=addemoji
  //Envia: qual emoji você quer adicionar? => coletor msg
  //Guarda numa variavel
  //Entra na guild da message
  //Adiciona o emoji com GUILD.emojis.create(var do emoji)
  
  if (!message.member.permissions.has("MANAGE_EMOJIS")){
    return 
  }
  
  
}