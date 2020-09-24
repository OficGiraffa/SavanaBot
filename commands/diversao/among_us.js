const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
  let member;
  let members = message.mentions.members;
  
  console.log(members);
  
  let restantes = 0;
  
  
  
  message.channel.send(". 　　　。　　　　•　 　ﾟ　　。 　　. \n" +
                       " 　　　.　　　 　　.　　　　　。　　 。　.\n" +　
                       ".　　 。　　　　　 ඞ 。 . 　　 • 　　　　•\n" +
                       `　ﾟ　　 ${member} não era um impostor　 。　. \n` +
                       ` '　　　 ${restantes} Restantes impostores 　 　　。\n` +
                        　"　ﾟ　　　.　　　. ,　　　　.　 .")
}