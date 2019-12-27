// rpgTest.js

function checkForGame() {
	var exists = getCookie('hp');
	if(exists != '') {
		document.getElementById("header").innerHTML = "THE ADVENTURE CONTINUES";
	} else {
		document.getElementById("header").innerHTML = "THE ADVENTURE BEGINS";
		document.getElementById("continue").style.visibility = "hidden";
	}
}

class Player {
	constructor(hp, mana, gold, loc, room) {
		this._hp = hp;
		this._mana = mana;
		this._gold = gold;
		this._loc = loc;
		this._room = room;
	}
	
	get hp() {
		return this._hp;
	}
	set hp(set) {
		this._hp = set;
	}
	adjHP(adj) {
		this._hp += adj;
	}
	
	get mana() {
		return this._mana;
	}
	set mana(set) {
		this._mana = set;
	}
	adjMana(adj) {
		this._mana += adj;
	}
	
	get gold() {
		return this._gold;
	}
	set gold(set) {
		this._gold = set;
	}
	adjGold(adj) {
		this._gold += adj;
	}
	
	get loc() {
		return this._loc;
	}
	set loc(set) {
		this._loc = set;
	}
	
	get room() {
		return this._room;
	}
	set room(set) {
		this._room = set;
	}
}

function newGame() {
	deleteAllCookies();
	setCookie('hp', 100);
	setCookie('mana', 100);
	setCookie('gold', 0);
	setCookie('loc', 'town');
	setCookie('room', 0);
	window.location = "rpgTestTown.html";
}

var hp = parseInt(getCookie('hp'), 10) || 0;
var mana = parseInt(getCookie('mana'), 10) || 0;
var gold = parseInt(getCookie('gold'), 10) || 0;
var loc = getCookie('loc');
var room = getCookie('room');
var player;

player = new Player(hp, mana, gold, loc, room);

function saveFile() {
	var loc = getCookie('loc');
	switch(loc) {
		case '':
			window.location = "error.html";
			break;
		case 'town':
			window.location = "rpgTestTown.html";
			break;
		case 'shop':
			window.location = "rpgTestShop.html";
			break;
		case 'inn':
			window.location = "rpgTestInn.html";
			break;
		case 'forest':
			window.location = "rpgTestForest.html";
			break;
		case 'dungeon':
			window.location = "rpgTestDungeon.html";
			break;
		default:
			window.location = "error.html";
			break;
	}
}

function displayStats() {
	document.getElementById("stats").innerHTML = "HP: " + player.hp + space(16) + "Mana: " + player.mana +"<br />Gold: " + player.gold;
}

function setCookies() {
	setCookie('hp', player.hp);
	setCookie('mana', player.mana);
	setCookie('gold', player.gold);
	setCookie('loc', player.loc);
	setCookie('room', player.room);
}

function goToTown() {
	player.room = 0;
	player.loc = 'town';
	setCookies();
	window.location = "rpgTestTown.html";
}

function goToShop() {
	player.loc = 'shop';
	setCookies();
	window.location = "rpgTestShop.html";
}

function goToInn() {
	player.loc = 'inn';
	setCookies();
	window.location = "rpgTestInn.html";
}

function goToForest() {
	player.loc = 'forest';
	setCookies();
	window.location = "rpgTestForest.html";
}

function goToDungeon() {
	player.loc = 'dungeon';
	setCookies();
	window.location = "rpgTestDungeon.html";
}

function saveAndQuit() {
	setCookies();
	window.location = "index.html";
}

function goldUp() {
	player.adjGold(10);
	displayStats();
}

function goldDown() {
	player.adjGold(-10);
	displayStats();
}

function buySword() {
	if(getCookie('boughtSword') != '') {
		setOutput("You already bought the sword!", 2000);
	} else {
		if(player.gold >= 100) {
			setCookie('boughtSword', 'true');
			player.adjGold(-100);
			setOutput("You bought the sword!", 2000);
			displayStats();
		} else {
			setOutput("You cannot afford the sword.", 2000);
		}
	}
}

function talkToBron() {
	if(getCookie('talkedToBron') != '') {
		setDesc("You have already talked to Bron.");
	} else {
		setCookie('talkedToBron', 'true');
		setDesc("You talk to Bron.");
	}
}

function talkToRatbite() {
	if(getCookie('talkedToRatbite') != '') {
		setDesc("You have already talked to Ratbite.");
	} else {
		setCookie('talkedToRatbite', 'true');
		setDesc("You talk to Ratbite.");
	}
}

function hpUp() {
	player.adjHP(10);
	displayStats();
}

function hpDown() {
	player.adjHP(-10);
	displayStats();
}

function manaUp() {
	player.adjMana(10);
	displayStats();
}

function manaDown() {
	player.adjMana(-10);
	displayStats();
}

function goToRoom(num) {
	player.room = num;
	var string = "Room " + num;
	setDesc(string);
}

function setRoom() {
	if(player.room != 0) {
		goToRoom(player.room);
	}
}