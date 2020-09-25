const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  let users_mention = message.mentions.users;
  
  let users = [];
  
  users_mention.forEach(async user => {
    users.push(user.id);
  })
  
  let index_user = Math.floor(Math.random() * users.length);
  
  message.channel.send(". 　　　。　　　　•　 　ﾟ　　。 　　. \n" +
                       " 　　　.　　　 　　.　　　　　。　　 。　.\n" +　
                       ".　　 。　　　　　 ඞ 。 . 　　 • 　　　　•\n" +
                       `　ﾟ　　 <@${users[index_user]}> não era um impostor　 。　. \n` +
                       ` '　　　 0 Restantes impostores 　 　　。\n` +
                        　"　ﾟ　　　.　　　. ,　　　　.　 .")
                         
}