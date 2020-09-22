const Discord = require("discord.js");
const Cheerio = require("cheerio");
const Request = require("request");


module.exports.run = async (client, message, args) => {
  kiss(message);
}

function kiss(message){
  let killTo = message.mentions.users.first() || message.author;
  
  let embed = new Discord.MessageEmbed()
  .setDescription(`Nunca serei pego HAHAHA👿! <@${message.author.id}> MATOU <@${killTo.id}>`)
  .setColor("BLACK")
  .setImage("https://i.ytimg.com/vi/ewuGItKb4kQ/maxresdefault.jpg")
  .setFooter("Por: " + message.author.username);
  
  message.channel.send(embed);

}
