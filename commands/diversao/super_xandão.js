const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let msg = args.join(" ");
  
  if (!args[0]){
    return message.reply("Desculpe! Sem ter algo para falar o Super Xandão fica quieto!");
  }
  message.channel.createWebhook("SUPER XANDÃO", {
    avatar: "https://pbs.twimg.com/profile_images/1306776294278004736/64yfTxt9_400x400.jpg",
  }).then(async (xandao) => {
    xandao.send(msg).then(async () => {
      msg.delete()
    });
  })
  message.delete();
}