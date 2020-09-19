module.exports.run = async (client, message, args) => {
 let msg = message.channel.send("🚬").then(async msg => {  
    msg.edit("🚬💨");
  })
}
                                            