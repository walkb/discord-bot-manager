// const { SlashCommandBuilder } = require("discord.js");

// // const wait = require ('node:timers/promises')./setTimeout

// module.exports = {
//     data: new SlashCommandBuilder()
//         .setName('party')
//         .setDescription('Makes a temporary voice channel')
//         .addStringOption(option =>
//             option.setName('party name')
//                 .setDescription('Voice channel name')
//                 .setRequired(true))
//             // .addSubcommand(subcommand =>
//             //     subcommand
//             //         .setName('user')
//             //         .setDescription('Info about a user')
//             //         .addUserOption(option => option.setName('target').setDescription('The user')))
// 			// .setName('user')
// 			// .setDescription('Info about a user')
// 			// .addUserOption(option => option.setName('target').setDescription('The user')))
//         .addIntegerOption(option =>
//             option.setName('members')
//                 .setDescription("Number of party members")
//                 .setRequired(true)
//                 .setMinValue(1)),
//     async execute(interaction) {
//         await interaction.deferReply();
//         // const target = interaction.options.getUser('target');
// 		// const reason = interaction.options.getString('reason') ?? 'No reason provided';
//         await interaction.reply({content: 'Party made!', ephemeral: true})
//         // if you want only the sender to see the command response
//         // await interaction.reply({ content: 'Secret Pong!', ephemeral: true })

//         // editing responses is valid up to 15 minutes after command is used
//         // await reply...
//         // await wait(2000);
//         // await interaction.editReply('Pong again!');

//         // defer response
//         // await interaction.deferReply();
//         // or... await interaction.deferReply({ephemeral: true});
//         // but you can't edit a reply to change ephemeral state
//         // await wait(4000);
//         // await interaction.editReply('Pong!');

//         // follow up, you can also pass an ephemeral flag
//         // await interaction.followUp('Pong again!');

//         // delete replies
//         // await interaction.deleteReply();

//         // fetch reply (for adding reactions, etc)
//         // const message = await interaction.fetchReply();
//     },
// };