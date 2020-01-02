const Discord = require("discord.js");
const bot = new Discord.Client({
        disableEveryone: true,
        fetchAllMembers: true
});

const fs = require("fs");

let config = require("./config.json");



bot.config = config;
bot.commands = new Discord.Collection();


bot.on("ready", async => {
    let a = 0;
    bot.guilds.forEach(async guild => {
      if (guild.id === " ") {
        guild.leave();
      }
    });
    
    console.log("Connexion en cours...");
    console.log("Connexion réussite !");
    console.log("Créateur je suis prêt à l'emploi !");
    console.log(`Bot ${bot.user.username} démarré, avec ${bot.users.size} utilisateurs, dans ${bot.channels.size} channels dans ${bot.guilds.size} discords.`);
    bot.user.setPresence({
      game: { name: `Bot OpenSource` }
    });


    let prefix = config.BOT_PREFIX;

fs.readdir("./commands/économie/", (err, files) => {

        if (err) console.log(err);
        let jsfile = files.filter(f => f.split(".").pop() === "js");
        if (jsfile.length <= 0) {
                console.log("Economie | Aucune commande est disponible dans cette catégorie");
                return;
        }
        console.log('────── Economie ──────')
        jsfile.forEach((f, i) => {
                let props = require(`./commands/économie/${f}`);
                console.log(`Economie | ${f} loaded !`);
                bot.commands.set(props.help.name, props);
        });
});

fs.readdir("./commands/info/", (err, files) => {

        if (err) console.log(err);
        let jsfile = files.filter(f => f.split(".").pop() === "js");
        if (jsfile.length <= 0) {
                console.log("Info | Aucune commande est disponible dans cette catégorie");
                return;
        }
        console.log('────── Info ──────')
        jsfile.forEach((f, i) => {
                let props = require(`./commands/info/${f}`);
                console.log(`Info | ${f} loaded !`);
                bot.commands.set(props.help.name, props);
        });
});



});