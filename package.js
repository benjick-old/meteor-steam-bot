Package.describe({
	summary: 'Lets you interface with Steam without running an actual Steam client',
	version: '0.0.1',
	name: 'benjick:steam-bot',
	git: 'https://github.com/benjick/meteor-steam-bot.git'
});

Package.onUse(function(api) {
	api.export('Steam', 'server');
	api.export('SteamTradeOffers', 'server');
	api.addFiles(['lib/steam-bot.js'], 'server');
});

Npm.depends({
	steam: '0.6.7',
	steam-tradeoffers: '1.2.1'
});
