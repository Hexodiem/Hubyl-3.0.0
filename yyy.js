client.on('message', msg => {
	if (msg.author.bot) return;
	const args = msg.content.split(/ +/g);
	const cmd = args.shift().toLowerCase();
	if (cmd === `prefix`) msg.channel.send('§');
});

client.on('message', msg => {
	if (msg.author.bot) return;
	if(msg.content.startsWith(`${opo}` + "salut"))
	msg.channel.send('Salut !');
});

client.on('message', msg => {
	if (msg.author.bot) return;

	if(msg.content.startsWith(`${PREFIX}` + "annonce")) {

	var args = msg.content.split(" ").slice(1);
	var msg = args.join(' ');

	const annonces = client.channels.find(r => r.id === '635663308208209944')

	annonces.send(msg);	
	}
});


client.on('message', msg => {
	if (msg.author.bot) return;
	if (msg.guild.member(msg.author).hasPermission("ADMINISTRATOR"));
	if(msg.content.startsWith(`${PREFIX}` + "stomp")) {
	var args = msg.content.split(" ").slice(1);
	var msg = args.join(' ');
	const annonces = client.channels.find(r => r.id === '636068171924766741');
	annonces.send(msg);
	}
});

client.on('message', msg => {
	if (msg.author.bot) return;
	if(msg.content.startsWith(`${PREFIX}` + "autre")) {
	var args = msg.content.split(" ").slice(1);
	var msg = args.join(' ');
	const annonces = client.channels.find(r => r.id === '636068227235053601');
	annonces.send(msg);
	}
});