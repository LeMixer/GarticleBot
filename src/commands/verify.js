const { SlashCommandBuilder} = require('@discordjs/builders');
const { Interaction, CommandInteraction } = require('discord.js');
const { errorEmbed } = require('../functions');



module.exports = {
    data: new SlashCommandBuilder()
        .setName('verify')
        .setDescription('Grants you the community role.'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        
        const role = interaction.guild.roles.cache.find(x => x.name === "Community");
        const member = interaction.member

        if (!role || !member) {
            await interaction.reply({ embeds: [errorEmbed(interaction)]})
            return;
        }

        if (!member.roles.cache.some(x => x === role)) {
            
            await member.roles.add(role);
            await interaction.reply('Verified :ok_hand:');
        }
        else {
            await interaction.reply('You are already verified! :x:')
        }
    }
}