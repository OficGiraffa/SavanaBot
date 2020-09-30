const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if (message.member.permissions.has("MANAGE_MESSAGES")) {
    const sayMessage = args.join(" ");

    let channelToSend = message.mentions.channels.first() || message.channel;

    if (!args[0]) {
      return message.channel.send(
        `<a:alerta:744938823368048702> Como vou falar se não tenho nada pra falar? 🤔`
      );
    }

    try {
      channelToSend.send(sayMessage.replace(channelToSend, ""));
    } finally {
      message.channel.send(
        `Mensagem de <@${message.author.id}> no canal <#${channelToSend.id}> enviada com sucesso!🔥`
      );
    }
  } else {
    message.author.send(
      `Desculpe <@${message.author.id}>! Você não tem permissão pra isso! 😶`
    );
  }
};
