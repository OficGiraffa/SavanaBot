const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
  let on = true;
  
  let intv = setInterval(() => {
    message.channel.send("k-code " + Math.floor(Math.random() * (999 - 100)));
  }, 3000);
  
  setTimeout(() => {
    on = false;
    clearInterval(intv);
    message.channel.send("Acabou o hack loco!");
  }, 1000000);
}