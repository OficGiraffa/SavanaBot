module.exports.run = async (client, message, args) => {
  let msg = message.channel.send("🚬").then((msg) => {
    client.setTimeout(() => {
      msg.edit("🚬💨")}, 3000);
       client.setTimeout(() => {
        msg.edit("🚬  💨")}, 4500);
         client.setTimeout(() => {
          msg.edit("🚬    💨")}, 5500);
            client.setTimeout(() => {
              msg.edit("🚬💨")}, 7500);
                client.setTimeout(() => {
                  msg.edit("🚬  💨")}, 8500);
                    client.setTimeout(() => {
                      msg.edit("🚬    💨")}, 8500);