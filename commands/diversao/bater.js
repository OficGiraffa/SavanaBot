const Discord = require("discord.js");
const Cheerio = require("cheerio");
const Request = require("request");


module.exports.run = async (client, message, args) => {
    let slapTo = message.mentions.users.first() || message.author;
  
    let embed = new Discord.MessageEmbed()
    .setTitle("Agora tu tá fudido! " + message.author.username + " bateu em " + "@" + slapTo.username)
    .setColor("RED")
    .setImage(gif_slap())
    .setFooter("Por: " + message.author.username);
  
    message.channel.send(embed);
  
    gif_slap();
}

function gif_slap(){
  let gifs_url = [
    "https://media.giphy.com/media/mEtSQlxqBtWWA/source.gif",
    "https://media.giphy.com/media/uqSU9IEYEKAbS/source.gif",
    "https://media.giphy.com/media/irU9BlmqEwZwc/source.gif",
    "https://media.giphy.com/media/gSIz6gGLhguOY/source.gif",
    "https://media.giphy.com/media/Ql5voX2wAVUYw/source.gif",
    "https://media.giphy.com/media/3oEdv1Rdmo0Vd0YdW0/source.gif",
    "https://media.giphy.com/media/vi2ciYHi5u0FO/source.gif",
    "https://media.giphy.com/media/u8maN0dMhVWPS/source.gif",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    
    
  ];
  
  let i = Math.floor(Math.random() * gifs_url.length);
  
  return gifs_url[i];
}