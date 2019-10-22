const Discord = require('discord.js');
const { TOKEN, PREFIX } = require('./config');
const client = new Discord.Client();

client.on('ready', () => {
	console.log("Let's go");
});

client.on('message', msg => {
	if (msg.author.bot) return;
	const args = msg.content.split(/ +/g);
	const cmd = args.shift().toLowerCase();
	if (cmd === `prefix`) msg.channel.send('§');
});

client.on('message', msg => {
	if (msg.author.bot) return;
	const args = msg.content.split(/ +/g);
	const cmd = args.shift().toLowerCase();
	const annonces = client.channels.find(r => r.id === '635663308208209944');
	if (cmd === `${PREFIX}annonce`) annonces.send(`${args}`);
});

client.on('message', msg => {
	if (msg.author.bot) return;
	const args = msg.content.split(/ +/g);
	const cmd = args.shift().toLowerCase();
	const annonces = client.channels.find(r => r.id === '636068171924766741');
	if (cmd === `${PREFIX}stomp`) annonces.send(`${args}`);
});

client.on('message', msg => {
	if (msg.author.bot) return;
	const args = msg.content.split(/ +/g);
	const cmd = args.shift().toLowerCase();
	const annonces = client.channels.find(r => r.id === '636068227235053601');
	if (cmd === `${PREFIX}team-b`) annonces.send(`${args}`);
});

client.login(TOKEN);
