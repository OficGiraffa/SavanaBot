const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
  let intv = setInterval(() => {
    message.channel.send("k-code " + Math.floor(Math.random() +100 * 999));
  }, 3000);
  
  setTimeout(() => {
    clearInterval(intv);
    message.channel.send("Acabou o hack loco!");
  }, 100000);
}