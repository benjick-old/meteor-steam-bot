Package.describe({
	summary: 'Lets you interface with Steam without running an actual Steam client',
	version: '0.6.7',
	name: 'maxpain177:steam-bot',
	git: 'https://github.com/Maxpain177/meteor-steam-bot.git'
});

Package.onUse(function(api) {
	api.export('SteamBot', 'server');
	api.addFiles(['lib/steam-bot.js'], 'server');
});

Npm.depends({
	steam: '0.6.7'
});