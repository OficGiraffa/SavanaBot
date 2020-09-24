const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let voice_channel = message.member.voice.channel;
  if (!voice_channel){
    return message.reply("Desculpe! Você precisa estar em um canal de áudio para escutar áudios! :/ ");
  }
  
  let music_url = 'https://www.youtube.com/watch?v=h5Z-9nZMOx8';
  
  let connection = await voice_channel.join();
  
  await connection.play(music_url);
  
  
  
  //message.reply(`Você está no canal: ${voice_channel}`);
}