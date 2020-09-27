const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let users_mention = message.mentions.users;
  
  if (!args[0]){
    return message.reply("Desculpe! Como vamos jogar sem nenhum jogador? :( ");
  } else if (!args[1]){
    return message.reply("Desculpe! Como você vai jogar sozinho? :( ");
  }
  
  let user_voted = doSomething(w, w);
  
  let users = [];
  
  let users_voted = [];
  
  users_mention.forEach(async user => {
    users.push(user.id);
  })
  
  let impostor_ind = Math.floor(Math.random * users.length);
  let impostor = users[impostor_ind];
  
  message.channel.send("ATENÇÃO JOGADORES! Votem na pessoa que vocês acham que é o impostor! Reaja com ✅ (Tem 15 segundos!)")
  
  for (let user_ind = 0; user_ind < users.length; user_ind++){
    let msg = message.channel.send(`<@${users[user_ind]}>`).then((msg) => {
      msg.react("✅");
      
      
      
      const reaction = msg.reactions;
      let user_react = reaction.users;
      const filter = (reaction, user_react) => reaction.emoji.name === "✅" && !user_react.bot;
      const collector = msg.createReactionCollector(filter, { time: 3000 })
      
      collector.on("collect", (reaction, user) => {
        message.channel.send(`<@${user.id}> votou em <@${reaction.message.mentions.users.first().id}>`);
      });
      
      collector.on("end", (collected) => {
        collected.forEach((collected_msg) => {
          users_voted.push(collected_msg);
        });
        
        users_voted.sort((a, b) => {
          if (a.count > b.count){
            return 1;
          }
          if (a.count < b.count){
            return -1;
          }
          
          return console.log("Skip");
        })
        
        user_voted = users_voted[0];
      })
    });
  }

  //message.channel.send(". 　　　。　　　　•　 　ﾟ　　。 　　. \n" +
  //                     " 　　　.　　　 　　.　　　　　。　　 。　.\n" +　
  //                     ".　　 。　　　　　 ඞ 。 . 　　 • 　　　　•\n" +
  //                     `　ﾟ　　 <@${users[index_user]}> não era um impostor　 。　. \n` +
  //                     ` '　　　 1 impostores restantes! 　 　　。\n` +
  //                      　"　ﾟ　　　.　　　. ,　　　　.　 .");                        
}

function userVotedOn (result) {
  console.log(result);
}

function userVotedOff (err) {
  console.log(err);
}