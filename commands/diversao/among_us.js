const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  let members = []
  let member;
  message.guild.members.forEach(member => {
    members.push(member);
    if (members.lenght > 100){
      return;
    }
  }).then(async () => {
    let i = Math.floor(Math.random() * members.lenght);
    member = members[i];
  });
  
  console.log(member);  
  
  let restantes = 0;
  
  
  
  message.channel.send(". 　　　。　　　　•　 　ﾟ　　。 　　. \n" +
                       " 　　　.　　　 　　.　　　　　。　　 。　.\n" +　
                       ".　　 。　　　　　 ඞ 。 . 　　 • 　　　　•\n" +
                       `　ﾟ　　 ${perso} não era um impostor　 。　. \n` +
                       ` '　　　 ${restantes} Restantes impostores 　 　　。\n` +
                        　"　ﾟ　　　.　　　. ,　　　　.　 .")
}