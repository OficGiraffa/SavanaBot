const Discord = require("discord.js");
const Fs = require("fs");

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) 
    return message.channel.send(`Desculpe <@${message.author.id}> você não tem permissão para isso!`);
  if (!args[0]) return message.channel.send(`Desculpe <@${message.author.id}> você não colocou nenhum prefixo para poder modificar!`);
  
  let prefixes = JSON.parse(Fs.readFileSync("././prefixes.json", "utf8"));
  
  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

}