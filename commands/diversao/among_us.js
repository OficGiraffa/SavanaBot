const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  let member;
  let members = message.guild.members.cache.filter(member => member.presence.status === "online");
  
  console.log(members.a;
  
  let restantes = 0;
  
  
  
  message.channel.send(". 　　　。　　　　•　 　ﾟ　　。 　　. \n" +
                       " 　　　.　　　 　　.　　　　　。　　 。　.\n" +　
                       ".　　 。　　　　　 ඞ 。 . 　　 • 　　　　•\n" +
                       `　ﾟ　　 ${member} não era um impostor　 。　. \n` +
                       ` '　　　 ${restantes} Restantes impostores 　 　　。\n` +
                        　"　ﾟ　　　.　　　. ,　　　　.　 .")
}