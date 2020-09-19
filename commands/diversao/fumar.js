module.exports.run = async (client, message, args) => {
  let msg = message.channel.send("🚬").then((msg) => {
    client.setTimeout(() => {
      msg.edit("🚬💨")}, 1500);
       client.setTimeout(() => {
        msg.edit("🚬  💨")}, 2500);
         client.setTimeout(() => {
          msg.edit("🚬    💨")}, 3500);
            client.setTimeout(() => {
              msg.edit("🚬💨")}, 4500);
               client.setTimeout(() => {
                 msg.edit("🚬  💨")}, 5500);
                  client.setTimeout(() => {
                    msg.edit("🚬")}, 0);
  })
}