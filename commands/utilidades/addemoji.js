const Discord = require("discord.js");

module.exports.run = async (message, client, args) => {
  //Guarda numa variavel
  //Entra na guild da message
  //Adiciona o emoji com GUILD.emojis.create(var do emoji)
  
  if (!message.member.permissions.has("MANAGE_EMOJIS")){
    return message.reply("Desculpe, você não tem permissão pra mexer nos emojis! >:c");
  };
  
  if (!args[0]){
    return message.reply("Desculpe, você não citou nenhum emoji! (Ou quer que eu escolha pra você? >:c)");
  };
  
  let emoji_to_add = args[0];
  
  try {
  message.guild.emojis.create(emoji_to_add);
  
  message.reply("Yee! Emoji adicionado com sucesso!");
  
  }
  
}