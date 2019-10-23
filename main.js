//-----------Module-----------------------

const Discord = require('discord.js');
const fs = require('fs');


//------------Client----------------------

const client = new Discord.Client();


//--------------Config---------------------

const { TOKEN, PREFIX, FIX } = require('./config');


//-------------Ready---------------

client.on('ready', () => {
	console.log("BOT Chargé !");
});


//-------------TOKEN-------------------------

client.login(TOKEN);


//--------Commande -----------------

//-------PREFIX-----------

client.on('message', msg => {
	if (msg.author.bot) return;
	const args = msg.content.split(/ +/g);
	const cmd = args.shift().toLowerCase();
	if (cmd === `prefix`) msg.channel.send(`${FIX}`);

//---------Annonce Général----

client.on('message', msg => {
	if (msg.author.bot) return;

	if(msg.content.startsWith(`${PREFIX}` + "annonce")) {

	var args = msg.content.split(" ").slice(1);
	var msg = args.join(' ');

	const annonces = client.channels.find(r => r.id === '635663308208209944')

	annonces.send(msg);	
	}
});