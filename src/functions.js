const { Embed } = require('@discordjs/builders');
const { MessageEmbed, Interaction, EmbedFooterData } = require('discord.js');

/**
 * 
 * @param {Interaction} interaction 
 * @returns {MessageEmbed} embed 
 */

function errorEmbed(interaction) {
    if (!interaction) {
        throw Error('interaction must be passed as param!');
    }

    return new MessageEmbed()
        .setTitle('Exception')
        .setColor('#e63339')
        .setDescription('Something went wrong while executing the command.')
        .addField(
            'Common sources of errrors', '\`bots permissions\`,' + 
            '\`member not found\`, \`role not found\`, \`incorrect hiercharchy\`', false
        )
        .setFooter({ text: 'Garticle Bot', iconURL: interaction.guild.me.avatarURL()})

}

module.exports = {
    errorEmbed
}