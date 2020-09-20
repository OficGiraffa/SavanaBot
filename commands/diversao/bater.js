const Discord = require("discord.js");
const Request = require("request");
const Cheerio = require("cheerio");

module.exports.run = async (client, message, args) => {
  bater(message);
}

function bater(message){
   var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + "slap gif",
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
         
        let gif_choise = urls[Math.floor(Math.random() * urls.length)]; //um url aleatorio da pagina
    	
	      //Aqui já é o uso da url como bem entender
        if (gif_choise !== undefined){
          let slapTo = message.mentions.users.first() || message.author.username
          
          let embed_slap = new Discord.MessageEmbed()
          .setTitle("Agora tu tá fudido! " + message.author.username + " bateu em @" + slapTo)
          .setColor("RED")
          .setImage(gif_choise)
          .setFooter("Por: " + message.author.username);
          
          
        }
    });
}