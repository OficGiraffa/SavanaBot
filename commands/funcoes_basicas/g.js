const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let msgs = [];
  
  client.guilds.cache.forEach((guild) => {
    if (guild.name === "a Teste Bot"){
      guild.channels.cache.forEach(channel => {
        if (channel.name === "imgs"){
          channel.messages.fetch().then((results) => {
            results.forEach(msg => {
              msgs.push(msg.content);
            });
          })
        }
      });
    }
  });
}
