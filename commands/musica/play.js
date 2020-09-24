const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let voice_channel = message.member.voice.channel;
  if (!voice_channel){
    return message.reply("Desculpe! Você precisa estar em um canal de áudio para escutar áudios! :/ ");
  }
  let connection = await voice_channel.join();
  
  let broadcast = client.voice.createBroadcast();
  broadcast.play("https://www.youtube.com/watch?v=GNRjFAxpyRI");
  
  connection.play(broadcast);
}