const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  let members = []
  let perso = await message.guild.members.forEach(member => {
    members.push(member);
  })
  
  
  
  
  
  
  let restantes = 0;
  
  
  
  message.channel.send(". 　　　。　　　　•　 　ﾟ　　。 　　. \n" +
                       " 　　　.　　　 　　.　　　　　。　　 。　.\n" +　
                       ".　　 。　　　　　 ඞ 。 . 　　 • 　　　　•\n" +
                       `　ﾟ　　 ${perso} não era um impostor　 。　. \n` +
                       ` '　　　 ${restantes} Restantes impostores 　 　　。\n` +
                        　"　ﾟ　　　.　　　. ,　　　　.　 .")
}