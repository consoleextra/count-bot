const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`${client.user.username} successfully launched.`);
  });

client.on('guildMemberAdd', member => {

    if(member.guild.id !== '478635237048451073') return undefined;

    member.guild.channels.get('478637155061727247').setName(`Total Users : ${member.guild.memberCount}`)
    let humans = member.guild.members.filter(m => !m.user.bot).size;
    member.guild.channels.get('478641384228913153').setName(`Total Members : ${humans}`)
    let bots = member.guild.members.filter(m => m.user.bot).size;
    member.guild.channels.get('478641522506465300').setName(`Total Bots : ${bots}`)

});

client.on('guildMemberRemove', member => {

    if(member.guild.id !== '478635237048451073') return undefined;

    member.guild.channels.get('478637155061727247').setName(`Total Users : ${member.guild.memberCount}`)
    let humans = member.guild.members.filter(m => !m.user.bot).size;
    member.guild.channels.get('478641384228913153').setName(`Total Members : ${humans}`)
    let bots = member.guild.members.filter(m => m.user.bot).size;
    member.guild.channels.get('478641522506465300').setName(`Total Bots : ${bots}`)

});

client.login('NDc4NjQ1MjQyMjk2NDAxOTIx.DlNs7A.lbmR8mvEX2cM4bpUFVzB7TUJf_c');