const Discord = require("discord.js");
const Cheerio = require("cheerio");
const Request = require("request");


module.exports.run = async (client, message, args) => {
  let gifKiss = random_gif();
  let kissTo = message.mentions.users.first() || message.author;
  
  let embed = new Discord.MessageEmbed()
  .setTitle("Beijo amoroso 😍! De " + message.author.username + " para " + "@" + kissTo.username)
  .setColor("PINK")
  .setImage(gifKiss)
  .setFooter("Por: " + message.author.username);
  
  message.channel.send(embed);
}

function random_gif(){
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
       
        //console.log(urls);
 
        if (!urls.length) {
           
            return;
        }
         
        let gif_choise = urls[Math.floor(Math.random() * urls.length)].then(()=> {
          return_url(gif_choise);
        });
      
        return_url(gif_choise);
    });
}

function return_url(gif_choise){
  return gif_choise;
}