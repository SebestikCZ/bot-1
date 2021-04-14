const Discord = require('discord.js')
const axios = require("axios")

module.exports = {
	name: 'meme',
	description: 'Posle meme',
	cooldown: 4,
	category: "zabava",
    	async execute(client, message, args) {
        var buff = (await axios({
            url: new URL("https://api.hyrousek.tk/images/meme").toString(),
            headers: {"Authorization":"to sa nestane"},
            responseType: "json"
        })).data;

          var embed = new Discord.MessageEmbed()
            .setImage(buff.url)
            .setColor('#e54918')
            .setURL(buff.link)
            .setTitle(buff.title)
            .setFooter(`karot.xyz - ${Date.now() - message.createdTimestamp}ms`)
         message.channel.send(embed)
         .catch(error =>
          console.log("Nejaký čurák mi zobral permisie... >:0")
      );
    }}
