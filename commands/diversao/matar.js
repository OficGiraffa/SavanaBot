const Discord = require("discord.js");
const Cheerio = require("cheerio");
const Request = require("request");


module.exports.run = async (client, message, args) => {
  kiss(message);
}

function kiss(message){
   var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + "Killing gif",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
  
  Request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }
 
 
        $ = Cheerio.load(responseBody);
 
 
        var links = $(".image a.link");
 
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
       
        //console.log(urls);
 
        if (!urls.length) {
           
            return;
        }
         
        let gif_choise = urls[Math.floor(Math.random() * urls.length)];
    
        if (gif_choise !== undefined){
           let killTo = message.mentions.users.first() || message.author;
  
            let embed = new Discord.MessageEmbed()
            .setTitle(`Nunca serei pego HAHAHA👿! <@${message.author.id}> MATOU <@${killTo.id}>`)
            .setColor("PINK")
            .setImage(gif_choise)
            .setFooter("Por: " + message.author.username);
  
            message.channel.send(embed);
        }
    });
}