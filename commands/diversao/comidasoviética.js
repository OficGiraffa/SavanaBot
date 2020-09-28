const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
  let embed = new Discord.MessageEmbed()
  .setTitle("Alimento soviético 😋: ")
  .setColor("RED")
  .setDescription("Desculpe... Não existe... 😥")
  .setImage("https://saude.abril.com.br/wp-content/uploads/2016/10/saude-alimentacao-jejum-prato-67059.jpg")
  .setFooter("NÓS pedimos: " + message.author.username);
  
  message.channel.send(embed);
}