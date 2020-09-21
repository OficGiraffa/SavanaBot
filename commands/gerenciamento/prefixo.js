const Discord = require("discord.js");
const Config = require("../../config.json");

module.exports.run = async (client, message, args) => {
  let next_prefix = args.join(" ");
  Config.prefix = next_prefix;
}