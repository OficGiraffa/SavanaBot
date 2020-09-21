const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  guild_princ(client)
}

function guild_princ(client){
  client.guilds.cache.forEach((guild) => {
    if (guild.name === "a Teste Bot"){
      console.log(guild.channels.cache.forEach(channel => {
        
      }));
    }
  });
}