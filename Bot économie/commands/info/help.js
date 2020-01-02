const Discord = require("discord.js");


module.exports.run = async (bot, message, args,functions, prefix) => {
                
        let moderation = `**Modération** → ${bot.commands.filter(f => f.help.category == 'Modération').map(r => `\`${r.help.name}\``).join(' | ')}`
        
                
        commandeList = '';
                
        commandeList += `${moderation}`;
                
                                         
                
        HelpEmbed = new Discord.RichEmbed()
         .setAuthor(bot.user.username, bot.user.displayAvatarURL)
         .setDescription(`❱ Préfixe: \`${prefix}\`\n❱ Informations sur une commande: \`${prefix}help <commande>\`\n\n${commandeList}${info}`)
         .setThumbnail(bot.user.displayAvatarURL)
         .setColor("RED")
         .setFooter(bot.user.username, bot.user.displayAvatarURL)
         .setTimestamp();
                
        message.channel.send(HelpEmbed);
                
                                     
         
        }
module.exports.help = {
        name: "help",
        category: "Modération",
        info: {
                description: "Permet d'afficher l'aide du bot"
              
        }
}