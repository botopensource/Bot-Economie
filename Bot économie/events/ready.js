
const Discord = require("discord.js");
const bot = new Discord.Client();




module.exports = async (bot) => {
	
	
        bot.user.setActivity(`🤖 ${bot.config.BOT_PREFIX}help → AIDE`, {
                type: "WATCHING"
        })
        let lStatus = [
                `🤖 ${bot.users.size} utilisateurs !`,
                `🤖 ${bot.guilds.size} serveurs !`,
                `🤖 ${bot.config.BOT_PREFIX}help → AIDE`,
        ]
        
        setInterval(() => {
        dbl.postStats(bot.guilds.size);
    }, 18000);

        setInterval(function () {
                let status = lStatus[Math.floor(Math.random() * lStatus.length)];
                bot.user.setActivity(status, {
                        type: "WATCHING"
                })
        }, 600000)

        //setInterval(function () {
        //        got.post("https://arcane-botcenter.xyz/api/" + bot.user.id + "/stats", {
        //                headers: {
        //                        Authorization: apiKey
        //                },
        //                body: {
        //                        servers_count: bot.guilds.size,
        //                        shards_count: 0,
        //                        members_count: bot.users.size
        //                },
        //                json: true
        //        }).then(/*data => */console.log(`Youtube Life | J'ai posté mon nombre de serveur !`)).catch(err => console.error(`Erreur, Youtube Life`))// | ${data.statusCode}`))
        //}, 3600000)
        await bot.user.setStatus('online')
        await bot.user.setUsername('Ton Bot')

        console.log("────────────────────");
        console.log(`Nom du bot : ${bot.user.username}`);
        console.log(`Nombre de serveur : ${new Intl.NumberFormat().format(bot.guilds.size)}`);
        console.log(`Nombre d'utilisateur : ${new Intl.NumberFormat().format(bot.users.size)}`);
        console.log("────────────────────");
        console.log(`Nombre de channels : ${new Intl.NumberFormat().format(bot.channels.size)}`);
        console.log(`Nombre d'émojis : ${new Intl.NumberFormat().format(bot.emojis.size)}`);
        console.log("────────────────────");
        console.log(`${bot.user.username} est online sur ${bot.guilds.size} serveurs !`);

        
}