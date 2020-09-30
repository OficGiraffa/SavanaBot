const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
  let on = false;
  
  let intv = setInterval(() => {
    on = true;
    message.channel.send("k-code " + Math.floor(Math.random() * (999 - 100))).then((msg) => {
      msg.delete();
    });
  }, 3000);
  
  setTimeout(() => {
    on = false;
    clearInterval(intv);
    message.channel.send("Acabou o hack loco!");
  }, 1000000);
}