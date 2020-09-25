const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  let users_mention = message.mentions.users;
  
  let users = [];
  
  users_mention.forEach(async user => {
    users.push(user.id);
  })
  
  let index_user = Math.floor(Math.random() * users.length);
  
  let impostor = Math.floor(Math.random() * 2);
  
  if (impostor === 0){
    message.channel.send(". 　　　。　　　　•　 　ﾟ　　。 　　. \n" +
                       " 　　　.　　　 　　.　　　　　。　　 。　.\n" +　
                       ".　　 。　　　　　 ඞ 。 . 　　 • 　　　　•\n" +
                       `　ﾟ　　 <@${users[index_user]}> não era um impostor　 。　. \n` +
                       ` '　　　 1 impostores restantes! 　 　　。\n` +
                        　"　ﾟ　　　.　　　. ,　　　　.　 ."); 
  } else if (impostor === 1){
    message.channel.send(". 　　　。　　　　•　 　ﾟ　　。 　　. \n" +
                       " 　　　.　　　 　　.　　　　　。　　 。　.\n" +　
                       ".　　 。　　　　　 ඞ 。 . 　　 • 　　　　•\n" +
                       `　ﾟ　　 <@${users[index_user]}> era um impostor　 。　. \n` +
                       ` '　　　 0 impostores restantes! 　 　　。\n` +
                        　"　ﾟ　　　.　　　. ,　　　　.　 ."); 
  }
                         
}