const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  let users_mention = message.mentions.users;
  
  let users = [];
  
  users_mention.forEach(async user => {
    users.push(user.id);
  })
  
  let index_user = Math.floor(Math.random() * users.lenght);
  
  console.log (index_user);
  
  /*
  message.channel.send(". 　　　。　　　　•　 　ﾟ　　。 　　. \n" +
                       " 　　　.　　　 　　.　　　　　。　　 。　.\n" +　
                       ".　　 。　　　　　 ඞ 。 . 　　 • 　　　　•\n" +
                       `　ﾟ　　 ${member} não era um impostor　 。　. \n` +
                       ` '　　　 ${restantes} Restantes impostores 　 　　。\n` +
                        　"　ﾟ　　　.　　　. ,　　　　.　 .")
                         */
}