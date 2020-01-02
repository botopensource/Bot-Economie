const Discord = require('discord.js')

module.exports.run = async (bot, message, args,  functions, prefix) => {

    let slots = [":gem:", ":trophy;", ":slot_machine:"];
    let resulta1 = Math.floor((Math.random() * slots.length));
    let resulta2 = Math.floor((Math.random() * slots.length));
    let resulta3 = Math.floor((Math.random() * slots.length));
    let icon = message.author.displayAvatarURL;

    if (resulta1 === resulta2 && resulta1 === resulta3) {
            
        let embed = new Discord.RichEmbed()
         .setTitle(':slot_machine: Slot Machine :slot_machine:')
         .setThumbnail(icon)
         .setDescription('**Tu as gagné ! bravo re tante ta chance**')
         .addField('Résultat:', slots[resulta1] + slots[resulta2] + slots[resulta3], true)
         .setColor(0xF4E842)
        message.channel.send(embed);
       
    
    } else {
        let embed2 = new Discord.RichEmbed()
         .setTitle(':slot_machine: Slot Machine :slot_machine:')
         .setThumbnail(icon)
         .setDescription('**Tu as perdu ! pas grave re tante ta chance**')
         .addField('Résultat :', slots[resulta1] + slots[resulta2] + slots[resulta3], true)
         .setColor(0xF4E842)
        message.channel.send(embed2);
    }  


}


module.exports.help = {
    name: "slot",
    category: "Modération",
    info: {
       description: "Slot Machine"
       
    }
 }