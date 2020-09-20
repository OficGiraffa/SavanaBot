const Discord = require("discord.js");
const Cheerio = require("cheerio");
const Request = require("request");


module.exports.run = async (client, message, args) => {
  let kissTo = message.mentions.users.first() || message.author;
  
  let embed = new Discord.MessageEmbed()
  .setTitle("Beijo amoroso 😍! De " + message.author.username + " para " + "@" + kissTo.username)
  .setColor("PINK")
  .setImage(random_gif())
  .setFooter("Por: " + message.author.username);
  
  message.channel.send(embed);
  
}

function random_gif(){
   let gif_choise = undefined;
  
   var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + "Kiss Gif",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
  
  Request(options, function(error, response, responseBody) {
        //if (error) {
            //return;
        //}
 
 
        $ = Cheerio.load(responseBody);
 
 
        var links = $(".image a.link");
 
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
       
        console.log(urls);
 
        //if (!urls.length) {
           
            //return;
        //}
 
        // Send result
        let url = urls[0]; //urls[Math.floor(Math.random() * urls.length)]
    });
  
  
}