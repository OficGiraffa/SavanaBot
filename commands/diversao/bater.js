const Discord = require("discord.js");
const Cheerio = require("cheerio");
const Request = require("request");


module.exports.run = async (client, message, args) => {
    let slapTo = message.mentions.users.first() || message.author;
    
    let desc = () => {
      if (slapTo.id === message.author.id){
        return `Não se bata! <@${message.author.id}> bateu nele mesmo!`
      } else {
        return `Agora tu tá fudido👊! <@${message.author.id}> bateu em <@${slapTo.id}>`;
      }
    }
  
    let embed = new Discord.MessageEmbed()
    .setDescription(desc())
    .setColor("RED")
    .setImage(choise_url(client))
    .setFooter("Por: " + message.author.username);
  
    message.channel.send(embed);
}

function choise_url (client){
  let urls = [
    "https://media.giphy.com/media/mEtSQlxqBtWWA/source.gif",
    "https://media.giphy.com/media/uqSU9IEYEKAbS/source.gif",
    "https://media.giphy.com/media/irU9BlmqEwZwc/source.gif",
    "https://media.giphy.com/media/gSIz6gGLhguOY/source.gif",
    "https://media.giphy.com/media/Ql5voX2wAVUYw/source.gif",
    "https://media.giphy.com/media/3oEdv1Rdmo0Vd0YdW0/source.gif",
    "https://media.giphy.com/media/vi2ciYHi5u0FO/source.gif",
    "https://media.giphy.com/media/u8maN0dMhVWPS/source.gif",
    "https://media.giphy.com/media/1v6NLTj3ND6Ss/source.gif",
    "https://media.giphy.com/media/3vDS40HZxJwFGTbXoI/source.gif",
    "https://media.giphy.com/media/uHmdaPn8khsQ0/source.gif",
    "https://media.giphy.com/media/l2SpSQLpViJk9vhmg/source.gif",
    "https://media.giphy.com/media/2UaMgzfRw5EZy/source.gif",
    "https://media.giphy.com/media/ylyUQlMlH59P2KatRC/source.gif",
    "https://media.giphy.com/media/vlH0dqH8DiZa0/source.gif",
    "https://media.giphy.com/media/4Nphcg0CCOfba/source.gif",
    "https://media.giphy.com/media/MqWwyj9LMLqG4/source.gif",
    "https://media.giphy.com/media/l2YOqzhYD066fAd56/source.gif",
    "https://media.giphy.com/media/rhqJ22puS29W0/source.gif",
    "https://media.giphy.com/media/rAKdqZ8nfiaZi/source.gif",
    "https://media.giphy.com/media/dHKi8uIOP34Wc/source.gif",
    "https://media.giphy.com/media/Hj9ixvpSfqcQo/source.gif",
    "https://media.giphy.com/media/11pCu5oiegYkAo/source.gif",
    "https://media.giphy.com/media/yR9keQc1zB8B2/source.gif",
    "https://media.giphy.com/media/j1zuL4htGTFQY/source.gif"
  ];
  
  let i = Math.floor(Math.random() * urls.length);
  return urls[i];
}