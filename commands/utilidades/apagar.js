const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let msg_clear = args.join(" ");
  if (!args[0]){
    msg_clear = 1;
  }
  
  try {
    message.channel.bulkDelete(msg_clear);
  } finally {
    let msg = await message.channel.send(`${msg_clear} mensagens apagadas com sucesso`).then(async (msg) => {
      setTimeout(() => {msg.delete()}, 5000);
    })
  }
}