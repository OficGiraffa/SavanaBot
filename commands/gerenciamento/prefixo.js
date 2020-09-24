const Discord = require("discord.js");
const Fs = require("fs");

module.exports.run = async (client, message, args) => {
  if (message.member.permissions.has("ADMINISTRATOR")){
    let next_prefix = args[0];
    
    let prefixes_file = Fs.readFileSync('./prefixes.json', 'utf8');
    let prefixes = JSON.parse(prefixes_file);
    
    pref
    
  } else {
    message.reply("Desculpe! Você não pode ficar mudando meu prefixo sem ter as permissões necessárias >:( ")
  }
}