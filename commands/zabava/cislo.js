const Discord = require("discord.js")

module.exports = {
    name: 'cislo',
    aliases: ['number', 'num', 'cislica'],
	description: 'Posle cislo od 0 do 10000',
    category: "zabava",
	async execute(client, message, args) {
        var embed = new Discord.MessageEmbed()
        .setDescription(Math.floor(Math.random()*10001))
        .setTitle('Náhodné čislo')
        .setColor('#e54918')
        .setFooter(`karot.xyz - ${Date.now() - message.createdTimestamp}ms`)
        message.channel.send(embed)
        .catch(error =>
              console.log("Nejaký čurák mi zobral permisie... >:0")
          );
    },
};
//console.log('Načítavam príkaz na čísla. (☞ﾟ∀ﾟ)☞')
