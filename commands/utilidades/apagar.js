const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if (message.member.permissions.has("MANAGE_MESSAGES")){
    let msg_clear = args.join(" ");
    if (!args[0]){
      return message.reply("Desculpe! Se eu não souber quanto tenho que apagar não tem como apagar!")
    }

    try {
      message.channel.bulkDelete(msg_clear);
    } finally {
      let msg = await message.channel.send(`${msg_clear} mensagens apagadas com sucesso`).then(async (msg) => {
        setTimeout(() => {msg.delete()}, 5000);
      })
    }
  } else {
    message.reply("Hei! Você não tem permissão pra apagar mensagens! 😤");
  }
}