const Discord = require('discord.js');
const auth = require('./auth.json');
const bot = new Discord.Client();

bot.once('ready', () => {
		console.log('WelcomeBot Ready!');
});

bot.login(auth.token);

bot.on('message', msg => {
	
	//Checking for command
	var msgtext = msg.toString();
	if(msgtext.substring(0,1) == '!')
	{
		var msgArray = msgtext.split(" ");
		var cmd = msgArray[0].substring(1);
		
		switch(cmd.toLowerCase()) {
			//Simple ping pong
			case "ping":
				msg.reply("Pong!");
				console.log("Pong!");
				break;
		
			//Agreeing to T&Cs's
			case "agree":
				//Who wrote the message
				console.log(msg.author.tag + ' has agreed to the rules');
		
				//Find and assign the guest role
				var role = msg.guild.roles.find(role => role.name === "Guest");
				msg.member.addRole(role);
		
				//Delete the message
				msg.delete();
				break;
		}
		
		console.log(cmd);
	}
});