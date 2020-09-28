const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let result = Math.floor(Math.random() * 2) + 1;
  
  let embed = undefined;
  
  if (result === 1){
    embed = new Discord.MessageEmbed()
    .setTitle("Cara ou Coroa?")
    .setColor("YELLOW")
    .setImage("https://i.colnect.net/f/2919/275/1-Real.jpg")
    .setDescription("CARA! 😀")
    .setFooter("Por: " + message.author.username);
  } else if (result === 2){
    embed = new Discord.MessageEmbed()
    .setTitle("Cara ou Coroa?")
    .setColor("RED")
    .setImage("https://upload.wikimedia.org/wikipedia/commons/6/6f/Brasil_coin_1_real-2.jpg")
    .setDescription("COROA! 👑")
    .setFooter("Por: " + message.author.username);
  }
  
  message.channel.send (embed);
  
  
  
}