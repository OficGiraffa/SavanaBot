const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  serverQueue = import (serverQueue from 'commands/musica/play.js';
  
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
  if (!serverQueue)
    return message.channel.send("There is no song that I could skip!");
  serverQueue.connection.dispatcher.end();
};
