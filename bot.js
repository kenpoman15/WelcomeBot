const Discord = require('discord.js');
const auth = require('./auth.json');
const bot = new Discord.Client();

bot.once('ready', () => {
		console.log('WelcomeBot Ready!');
});

bot.login(auth.token);

bot.on('message', msg => {
	
	//Update user to guest
    if (msg.content == '!agree') {
		//console.log(msg.client.user + ' has agreed to the rules');
		
		//Find and assign the guest role
		var role = msg.guild.roles.find(role => role.name === "Guest");
		msg.member.addRole(role);
		
		//Delete the message
		msg.delete();
    }
});