const Discord = require("discord.js");
const Cheerio = require("cheerio");
const Request = require("request");


module.exports.run = async (client, message, args) => {
    let slapTo = message.mentions.users.first() || message.author;
  
    let embed = new Discord.MessageEmbed()
    .setTitle("Agora tu tá fudido! " + message.author.username + " bateu em " + "@" + slapTo.username)
    .setColor("RED")
    .setImage()
    .setFooter("Por: " + message.author.username);
  
            message.channel.send(embed);
}

function gif_slap(message){
  let gifs_url = [
    
  ]
  
  let total_url = Math.floor(Math.random() * gifs_url.length)
  console.log(total_url)
}