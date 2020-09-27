const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let users_mention = message.mentions.users;
  
  if (!args[0]){
    return message.reply("Desculpe! Como vamos jogar sem nenhum jogador? :( ");
  }
  
  let users = [];
  
  users_mention.forEach(async user => {
    users.push(user.id);
  })
  
  let impostor_ind = Math.floor(Math.random * users.length);
  let impostor = users[impostor_ind];
  
  message.channel.send("ATENÇÃO JOGADORES! Votem na pessoa que vocês acham que é o impostor! Reaja com ✅")
  
  for (let user_ind = 0; user_ind < users.length; user_ind++){
    let msg = message.channel.send(`<@${users[user_ind]}>`).then((msg) => {
      msg.react("✅");
      
      const reaction = msg.reactions;
      let user_react = reaction.users;
      const filter = (reaction, user_react) => reaction.emoji.name === "✅" && !user_react.bot;
      const collector = msg.createReactionCollector(filter);
      
      collector.on("collect", (reaction, user) => {
        message.channel.send(`<@${user.id}> votou em <@${reaction.message.mentions.users.first().id}>`)
      });
    });
  }
  
  //message.channel.send(". 　　　。　　　　•　 　ﾟ　　。 　　. \n" +
  //                     " 　　　.　　　 　　.　　　　　。　　 。　.\n" +　
  //                     ".　　 。　　　　　 ඞ 。 . 　　 • 　　　　•\n" +
  //                     `　ﾟ　　 <@${users[index_user]}> não era um impostor　 。　. \n` +
  //                     ` '　　　 1 impostores restantes! 　 　　。\n` +
  //                      　"　ﾟ　　　.　　　. ,　　　　.　 .");                        
}