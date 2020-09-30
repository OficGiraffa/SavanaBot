const Discord = require("discord.js");
const hackloco = require("hackloco.js");

module.exports.run = async (client, message, args) => {
 if (hackloco.on === true){
   console.log("Desativado");
 }
}