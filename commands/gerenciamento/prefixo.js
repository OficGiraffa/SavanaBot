const Discord = require("discord.js");
//const FireBase = require("firebase");

let prefix = '';
let xp = '';
let nextLevel = '';

module.exports.run = async (client, message, args, database) => {
  database.ref(`Servidores/Levels/${message.guild.id}`)
}