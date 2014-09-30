var yesButton, noButton, modernButton, nintiesButton, thirtiesButton, ninteenthButton, earlierButton;
var tombstone, fangs, cloud, grail, werewolf, lilZombie, bat, mountains, mountainsMansion;
var state = 0;
var batX = 50;
var batY = 100;
var cloudX = 700;
var type, smallType;
var title, questionGrail, questionZombie, questionWerewolf, questionEra, questionBuffy, sexyPerson;
var grailQuest, grailQuest2, wolfie, zombified;
var questionPale, questionLoner, questionNight, questionSparkle, notVamp, notTwilight;
var sexyBite1, sexyBite2, sexyBite3;
var blackWhite, mansion, stake;
var batTurn, sips, vanHelsing, religious, cross;
var bloated, shroud, citrus, lemon, catJump, hawthorne, burn, milletRice;
var victory, alone, buffy;
var historyBat, historyLemon, historyMillet, historyShroud, historyHawthorne, historyCat, historyBloat;

function preload() {

	mountainsMansion = loadImage("./img/mountainsMansionSmall.png");
	mountains = loadImage("./img/mountainsSmall.png");
	cloud = loadImage("./img/cloud.png");
	bat = loadImage("./img/batSmall.png");
	fangs = loadImage("./img/fangsCardboard.png");
	yesButton = loadImage("./img/yesButton.png");
	noButton = loadImage("./img/noButton.png");
	tombstone = loadImage("./img/tombstoneC.png");
	grail = loadImage("./img/grail.png");
	werewolf = loadImage("./img/wolfC.png");
	lilZombie = loadImage("./img/zombieSmall.png");
	modernButton = loadImage("./img/modernButton.png");
	nintiesButton = loadImage("./img/90sButton.png");
	thirtiesButton = loadImage("./img/30sButton.png");
	ninteenthButton = loadImage("./img/19thCButton.png");
	earlierButton = loadImage("./img/earlierButton.png");
}

function setup() {
	// var myCanvas = createCanvas(1100, 600);
	// myCanvas.parent('p5Sketch');
	// createCanvas(1100, 600);
	createCanvas(windowWidth, windowHeight);

  // text.style('font-family', 'Walter Turncoat');
  textSize(48);
  textLeading(48);
  textAlign(CENTER);
  fill(28, 195, 217);

	title = "Do you want to live forever?";
	questionGrail = "Do you like long, danger-filled adventures?";
	grailQuest = "GRAIL QUEST!";
	grailQuest2 = "Get your pals together & let's roll!";
	questionWerewolf = "Do you like to get hairballs?";
	wolfie = "Monthly madness!";
	questionZombie = "Do you want to decompose?";
	zombified = "Eww. Gross.";
	questionEra = "What era would you like to live in?";
	questionBuffy = "Are you Buffy?";
	sexyPerson = "Find the sexiest person you know.";
	questionPale = "Super pale?";
	questionLoner = "Loner?";
	questionNight = "Night-owl?";
	questionSparkle = "DO THEY SPARKLE?";
	notVamp = "Not a vampire, soz.";
	notTwilight = "Well at least you don't live in a Twilight novel.";
	sexyBite1 = "Sidle up and get them to love you.";
	sexyBite2 = "Be about to die.";
	sexyBite3 = "BITE!";
	blackWhite = "Do you want to live in black & white?";
	mansion = "Find a super scary mansion with a super rich recluse.";
	sips = "Let him take little sips...";
	stake = "Get a stake! Stake him if he's about to drain you dry.";
	batTurn = "Do you like bats?";
	vanHelsing = "Do you know professor van Helsing?";
	religious = "Do you have a lot of religious paraphernalia around?";
	cross = "Oops! You got holied.";
	bloated = "Are you quite averse to being bloated?";
	shroud = "Do you have a shroud you can wear?";
	catJump = "Do cats frequently jump over your head?";
	hawthorne = "Are there lots of hawthorne bushes nearby?";
	burn = "Burn them! Quick!";
	citrus = "Do a lot of your friends have citrus fruit?";
	lemon = "Quick! Eat all the lemons!";
	milletRice = "Before you go, make sure to get rid of all the millet and rice in sight.";
	victory = "VICTORY!";
	alone = "Now you'll be alone forever. And dead inside.";
	buffy = "Well you can't BE a vampire if you're here to SLAY vampires. Go find Angel and stare at each other longingly already."
	historyBloat = "Before the 19th century, vampires were thought to be noticeably bloated with the blood of their victims. Squishy.";
  historyCat = "In Chinese and Slavic lore, if a cat, particularly a black cat, jumps over your corpse, you are very likely to become a vampire. True story.";
	historyLemon = "Apparently a lemon in your mouth (corpse mouth, obviously) will keep you from turning into a vampire after death.";
	historyHawthorne = "Hawthorne makes the best stake! Ash and oak are less effective, but just make sure to get rid of all the potential weapons.";
	historyMillet = "In several cultures, pouring millet or rice on a person's grave will keep them from turning into a vampire. In other cultures it will just slow vampires down - they have to stop and count each grain.. So maybe it doesn't keep you from turning, but it WILL get you very, very bored. Vampires with OCD are particularly susceptible.";
	historyBat = "Bram Stoker's Dracula is the first integration of the bat phenomena, so you will probably have to turn into a bat if you want to be this badass vamp.";
	historyShroud = "Pre-svelte vamps wore their funeral shrouds around (talk about a boring outfit) and slept with their left eye open. Creepy.";
}

function draw() {
  background(0);
  // titleScreen();
  if (state == 0) {
     titleScreen();
  }
  if (state == 1) {
     qGrail();
  }
  if (state == 2) {
     rip();
  }
  if (state == 3) {
     qWerewolf();
  }
  if (state == 4) {
     grailTime();
  }
  if (state == 5) {
     wolf();
  }
  if (state == 6) {
     qZombie();
  }
  if (state == 7) {
     zombie();
  }
  if (state == 8) {
     qEra();
  }
  if (state == 9) {
     qBuffy();
  }
  if (state == 10) {
     sexy();
  }
  if (state == 11) {
     notVampire();
  }
  if (state == 12) {
     notTwilightMovie();
  }
  if (state == 13) {
     sexyBite();
  }
  if (state == 14) {
     bWhite();
  }
  if (state == 15) {
     richMansion();
  }
  if (state == 16) {
     oldBite();
  }
  if (state == 17) {
     qBats();
  }
  if (state == 18) {
     qBloated();
  }
  if (state == 19) {
     qShroud();
  }
  if (state == 20) {
     qLemon();
  }
  if (state == 21) {
     qCat();
  }
  if (state == 22) {
     qHawthorne();
  }
  if (state == 23) {
     qMillet();
  }
  if (state == 24) {
     vampireVictory();
  }
  if (state == 25) {
     grailTime();
  }
  if (state == 26) {
     areBuffy();
  }
  if (state == 27) {
     burnIt();
  }
  if (state == 28) {
     eatLemons();
  }
  if (state == 29) {
     paleNight();
  }
  if (state == 30) {
     pale2();
  }
  if (state == 31) {
    sparkle();
  }
  if (state == 32) {
    nightOwl2(); 
  }
  if (state == 33) {
    nightOwl();
  }
}

function titleScreen() {
	 rectMode(CENTER);
   textAlign(CENTER);
   textFont(type);
   fill(28, 195, 217);
   text(title, (displayWidth - displayWidth/3), (displayHeight/4), width/3, 200);
   image(mountains, -55, 250);
   image(cloud, cloudX, 350);
   image(yesButton, width/3, 500);
   image(noButton, ((width - (width/3)) - 200), 500);
   if ((mouseX > 700) && (mouseX < 850) && (mouseY > 350) && (mouseY < 410) && mouseIsPressed) {
     cloudX--;
   }
}

function rip() {
	image(tombstone,  width/5,  height/3);
   if ((mouseX > (width/5)) && (mouseX < ((width/5)+200)) && (mouseY > 200) && (mouseY < 400) && mouseIsPressed) {
     state = 0;
   }
}

function qGrail() {
	rectMode( CENTER);
   textAlign( CENTER);
   textSize(48);
    textLeading(48);
   textFont(type);
   text(questionGrail,  (displayWidth - displayWidth/3),  height/3, width/3, 200);
   image(yesButton, width/3, 500);
   image(noButton, ((width - (width/3)) - 200), 500);
}

function grailTime() {
	rectMode( CENTER);
   textAlign( CENTER);
   textSize(48);
    textLeading(48);
   textFont(type);
   text(grailQuest,  (displayWidth - displayWidth/3),  height/5, width/3, 200);
   text(grailQuest2,  (displayWidth - displayWidth/3), ( height - ( height/9)), width/3, 200);
   image(grail,  width/2.5,  height/4);
}

function qZombie() {
	rectMode( CENTER);
   textAlign( CENTER);
   textSize(48);
    textLeading(48);
   textFont(type);
   text(questionZombie,  (displayWidth - displayWidth/3),  height/3, width/3, 200);
   image(yesButton, width/3, 500);
   image(noButton, ((width - (width/3)) - 200), 500);
}

function zombie() {
	rectMode( CENTER);
   textAlign( CENTER);
   textSize(48);
  textLeading(48);
   textFont(type);
   text(zombified,  (displayWidth - displayWidth/3),  height/3, width/3, 200);
   image(lilZombie,  width/8,  height/4);
}

function qWerewolf() {
	rectMode( CENTER);
   textAlign( CENTER);
   textSize(48);
  textLeading(48);
   textFont(type);
   text(questionWerewolf,  (displayWidth - displayWidth/3),  height/3, width/3, 200);
   image(yesButton, width/3, 500);
   image(noButton, ((width - (width/3)) - 200), 500);
}

function wolf() {
	rectMode( CENTER);
   textAlign( CENTER);
   textSize(48);
  textLeading(48);
   textFont(type);
   text(wolfie,  (displayWidth - displayWidth/3),  height/4, width/3, 200);
   image(werewolf,  width/7,  height/3);
}

function qEra() {
	rectMode( CENTER);
   textAlign( CENTER);
   textSize(48);
  textLeading(48);
   textFont(type);
   text(questionEra,  (displayWidth - displayWidth/3),  height/3, width/3, 200);
   image(earlierButton, 75, 400);
   image(ninteenthButton, 275, 400);
   image(thirtiesButton, 475, 400);
   image(nintiesButton, 675, 400);
   image(modernButton, 875, 400);
}

function qBloated() {
	rectMode( CENTER);
   textAlign( CENTER);
   textSize(48);
  textLeading(48);
   textFont(type);
   text(bloated,  (displayWidth - displayWidth/3),  height/3, width/3, 200);
   textSize(20);
  textLeading(20);
   textFont(smallType);
   text(historyBloat, (displayWidth - displayWidth/3), 400, width/3, 100);
   image(yesButton, width/3, 500);
   image(noButton, ((width - (width/3)) - 200), 500);
}

function qShroud() {
	rectMode( CENTER);
   textAlign( CENTER);
   textSize(48);
  textLeading(48);
   textFont(type);
   text(shroud,  (displayWidth - displayWidth/3),  height/3, width/3, 200);
   textSize(20);
  textLeading(20);
   textFont(smallType);
   text(historyShroud, (displayWidth - displayWidth/3), 400, width/3, 100);
   image(yesButton, width/3, 500);
   image(noButton, ((width - (width/3)) - 200), 500);
}

function qLemon() {
	rectMode( CENTER);
   textAlign( CENTER);
   textSize(48);
  textLeading(48);
   textFont(type);
   text(citrus,  (displayWidth - displayWidth/3),  height/3, width/3, 200);
   image(yesButton, width/3, 500);
   image(noButton, ((width - (width/3)) - 200), 500);
}

function eatLemons() {
	rectMode( CENTER);
   textAlign( CENTER);
   textSize(48);
  textLeading(48);
   textFont(type);
   text(lemon,  (displayWidth - displayWidth/3),  height/3, width/3, 200);
   textSize(20);
  textLeading(20);
   textFont(smallType);
   text(historyLemon, (displayWidth - displayWidth/3), 400, width/3, 100);
   image(yesButton, width/3, 500);
   image(noButton, ((width - (width/3)) - 200), 500);
}

function qCat() {
	rectMode( CENTER);
   textAlign( CENTER);
   textSize(48);
  textLeading(48);
   textFont(type);
   text(catJump,  (displayWidth - displayWidth/3),  height/3, width/3, 200);
   textSize(20);
  textLeading(20);
   textFont(smallType);
   text(historyCat, (displayWidth - displayWidth/3), 400, width/3, 100);
   image(yesButton, width/3, 500);
   image(noButton, ((width - (width/3)) - 200), 500);
}

function qHawthorne() {
	rectMode( CENTER);
   textAlign( CENTER);
   textSize(48);
  textLeading(48);
   textFont(type);
   text(hawthorne,  (displayWidth - displayWidth/3),  height/3, width/3, 200);
   image(yesButton, width/3, 500);
   image(noButton, ((width - (width/3)) - 200), 500);
}

function burnIt() {
	 rectMode( CENTER);
   textAlign( CENTER);
   textSize(48);
  textLeading(48);
   textFont(type);
   text(burn,  (displayWidth - displayWidth/3),  height/3, width/3, 200);
   textSize(20);
  textLeading(20);
   textFont(smallType);
   text(historyHawthorne, (displayWidth - displayWidth/3), 400, width/3, 100);
   image(yesButton, width/3, 500);
   image(noButton, ((width - (width/3)) - 200), 500);
}

function qMillet() {
	rectMode( CENTER);
   textAlign( CENTER);
   textSize(48);
  textLeading(48);
   textFont(type);
   text(milletRice,  (displayWidth - displayWidth/3),  height/3, width/3, 300);
   textSize(20);
  textLeading(20);
   textFont(smallType);
   text(historyMillet, (displayWidth - displayWidth/3), 350, width/3, 200);
   image(yesButton, width/3, 500);
   image(noButton, ((width - (width/3)) - 200), 500);
}

function qBats() {
	rectMode( CENTER);
   textAlign( CENTER);
   textSize(48);
  textLeading(48);
   textFont(type);
   text(batTurn,  (displayWidth - displayWidth/3),  height/3, width/3, 200);
   textSize(20);
  textLeading(20);
   textFont(smallType);
   text(historyBat, (displayWidth - displayWidth/3), 400, width/3, 100);
   image(yesButton, width/3, 500);
   image(noButton, ((width - (width/3)) - 200), 500);
   image(bat, batX, batY);
   if ((mouseX < 450) && (mouseX > 50) && (mouseY > 100) && (mouseY < 300) && mouseIsPressed) {
      batX++;
      batY--; 
    }
}

function bWhite() {
	rectMode( CENTER);
   textAlign( CENTER);
   textSize(48);
  textLeading(48);
   textFont(type);
   text(blackWhite,  (displayWidth - displayWidth/3),  height/3, width/3, 200);
   image(yesButton, width/3, 500);
   image(noButton, ((width - (width/3)) - 200), 500);
}

function richMansion() {
	rectMode( CENTER);
   image(mountainsMansion, -55, 150);
   textAlign( CENTER);
   textSize(48);
  textLeading(48);
   textFont(type);
   text(mansion,  (displayWidth - displayWidth/3),  height/3, width/3, 200);
   image(yesButton, width/3, 500);
   image(noButton, ((width - (width/3)) - 200), 500);
}

function paleNight() {
	rectMode( CENTER);
   textAlign( CENTER);
   textSize(48);
  textLeading(48);
   textFont(type);
   text(questionPale,  (displayWidth - displayWidth/3),  height/5, width/3, 50);
   image(yesButton, width/3, ( height/5)+100);
   image(noButton, ((width - (width/3)) - 200), ( height/5)+100);
}

function nightOwl() {
	rectMode( CENTER);
   textAlign( CENTER);
   textSize(48);
  textLeading(48);
   textFont(type);
   text(questionPale,  (displayWidth - displayWidth/3),  height/5, width/3, 50);
   image(yesButton, width/3, ( height/5)+100);
   image(noButton, ((width - (width/3)) - 200), ( height/5)+100);
   text(questionNight,  (displayWidth - displayWidth/3),  400, width/3, 50);
   image(yesButton, width/3, 500);
   image(noButton, ((width - (width/3)) - 200), 500);
}

function notVampire() {
	rectMode( CENTER);
   textAlign( CENTER);
   textSize(48);
  textLeading(48);
   textFont(type);
   text(notVamp,  (displayWidth - displayWidth/3),  height/4, width/3, 200);
   image(tombstone,  (displayWidth - displayWidth/3),  200);
   if ((mouseX > (displayWidth - displayWidth/3)) && (mouseX < ((displayWidth - displayWidth/3)+200)) && (mouseY > 200) && (mouseY < 400) && mouseIsPressed) {
     state = 0;
   }
}

function oldBite() {
	rectMode( CENTER);
   textAlign( CENTER);
   textSize(48);
  textLeading(48);
   textFont(type);
   text(sips,  (displayWidth - displayWidth/3),  height/3, width/3, 200);
   text(stake,  (displayWidth - displayWidth/3),  350, width/3, 300);
   image(yesButton, ((width/2) - 100), 500);
}

function sexy() {
	rectMode( CENTER);
   textAlign( CENTER);
   textSize(48);
  textLeading(48);
   textFont(type);
   text(sexyPerson,  (displayWidth - displayWidth/3),  height/3, width/3, 200);
   image(yesButton, width/3, 500);
   image(noButton, ((width - (width/3)) - 200), 500);
}

function pale2() {
   rectMode( CENTER);
   textAlign( CENTER);
   textSize(48);
  textLeading(48);
   textFont(type);
   text(questionPale, (displayWidth - displayWidth/3), height/5, width/3, 50);
   image(yesButton, width/3, (height/5)+100);
   image(noButton, ((width - (width/3)) - 200), (height/5)+100);
}

function nightOwl2() {
   rectMode( CENTER);
   textAlign( CENTER);
   textSize(48);
  textLeading(48);
   textFont(type);
   text(questionPale, (displayWidth - displayWidth/3), height/5, width/3, 50);
   image(yesButton, width/3, (height/5)+100);
   image(noButton, ((width - (width/3)) - 200), (height/5)+100);
   text(questionNight, (displayWidth - displayWidth/3), 350, width/3, 50);
   image(yesButton, width/3, 500);
   image(noButton, ((width - (width/3)) - 200), 500); 
}

function sparkle() {
   rectMode( CENTER);
   textAlign( CENTER);
   textSize(48);
  textLeading(48);
   textFont(type);
   text(questionSparkle,  (displayWidth - displayWidth/3),  height/3, width/3, 200);
   image(yesButton, width/3, 500);
   image(noButton, ((width - (width/3)) - 200), 500);
}

function notTwilightMovie() {
   rectMode( CENTER);
   textAlign( CENTER);
   textSize(48);
  textLeading(48);
   textFont(type);
   text(notTwilight,  (displayWidth - displayWidth/3),  height/3, width/3, 200);
   image(yesButton, ((width/2) - 100), 500);
}

function sexyBite() {
   rectMode( CENTER);
   textAlign( CENTER);
   textSize(48);
  textLeading(48);
   textFont(type);
   text(sexyBite1,  (displayWidth - displayWidth/3),  height/5, width/3, 100);
   text(sexyBite2,  (displayWidth - displayWidth/3),  height/3, width/3, 100);
   text(sexyBite3,  (displayWidth - displayWidth/3), height/2, width/3, 100);
   image(yesButton, ((width/2) - 100), 500);
}

function qBuffy() {
   rectMode( CENTER);
   textAlign( CENTER);
   textSize(48);
  textLeading(48);
   textFont(type);
   text(questionBuffy,  (displayWidth - displayWidth/3),  height/3, width/3, 200);
   image(yesButton, width/3, 500);
   image(noButton, ((width - (width/3)) - 200), 500);
}

function areBuffy() {
   rectMode( CENTER);
   textAlign( CENTER);
   textSize(48);
  textLeading(48);
   textFont(type);
   text(buffy,  (displayWidth - displayWidth/4),  height/3, width/2, 300);
}

function vampireVictory() {
   rectMode( CENTER);
   textAlign( CENTER);
   textSize(48);
  textLeading(48);
   textFont(type);
   text(victory,  (displayWidth - displayWidth/3),  height/3, width/3, 300);
   text(alone,  (displayWidth - displayWidth/3), ( height - ( height/4)), width/3, 300);
   image(fangs,  width/4.5,  height/6);
}



function mousePressed() {
  
  if (state == 31) { //sparkle
      //press yesButton
    if ((mouseX < ((width/3)+200)) && (mouseX > (width/3)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
      //goes to sexyBite
      state = 13;
    }
    if ((mouseX < (width - (width/3))) && (mouseX > ((width-(width/3))-200)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
      //goes to notTwilightMovie
      state = 12;
    }
  }
  
  if (state == 32) { //nightOwl2
    if ((mouseX < ((width/3)+200)) && (mouseX > (width/3)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
      //goes to sparkle
      state = 31;
    }
    if ((mouseX < (width - (width/3))) && (mouseX > ((width-(width/3))-200)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
      //goes to notVamp
      state = 11;
    }
  }
  
  if (state == 30) { //pale2
     //press yesButton
    if ((mouseX < ((width/3)+200)) && (mouseX > (width/3)) && ( mouseY > ((height/5)+100)) && ( mouseY < ((height/5)+142)) &&  mouseIsPressed) {
      //brings up nightOwl2 question
       state = 32;
    }
    if ((mouseX < (width - (width/3))) && (mouseX > ((width-(width/3))-200)) && ( mouseY > ((height/5)+100)) && ( mouseY < ((height/5)+142)) &&  mouseIsPressed) {
      //goes to notVampire
      state = 11;
    }
  }
  
  if (state == 29) { //paleNight
    //press yesButton
    if ((mouseX < ((width/3)+200)) && (mouseX > (width/3)) && ( mouseY > (( height/5)+100)) && ( mouseY < (( height/5)+142)) &&  mouseIsPressed) {
      //goes to nightOwl
       state = 33;
    }
    if ((mouseX < (width - (width/3))) && (mouseX > ((width-(width/3))-200)) && ( mouseY > ((height/5)+100)) && ( mouseY < ((height/5)+142)) &&  mouseIsPressed) {
      //goes to notVampire
      state = 11;
    }
  }
  
  if (state == 28) { //eatLemons
    //press yesButton
    if ((mouseX < ((width/3)+200)) && (mouseX > (width/3)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
      //goes to cats
      state = 21;
    }
    if ((mouseX < (width - (width/3))) && (mouseX > ((width-(width/3))-200)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
      //goes to RIP
      state = 2;
    }
  }
  
  if (state == 23) { //qMillet
      //press yesButton
    if ((mouseX < ((width/3)+200)) && (mouseX > (width/3)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
      //goes to vampireVictory
      state = 24;
    }
    if ((mouseX < (width - (width/3))) && (mouseX > ((width-(width/3))-200)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
      //goes to RIP
      state = 2;
    }
  }
  
  if (state == 27) { //burnIt
    //press yesButton
    if ((mouseX < ((width/3)+200)) && (mouseX > (width/3)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
      //goes to millet and rice
      state = 23;
    }
    if ((mouseX < (width - (width/3))) && (mouseX > ((width-(width/3))-200)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
      //goes to RIP
      state = 2;
    }
  }
  
  if (state == 22) { //qHawthorne
      //press yesButton
    if ((mouseX < ((width/3)+200)) && (mouseX > (width/3)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
      //goes to burnIt
      state = 27;
    }
    if ((mouseX < (width - (width/3))) && (mouseX > ((width-(width/3))-200)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
      //goes to millet & rice
      state = 23;
    }
  }
  
  if (state == 21) { //qCat
      //press yesButton
    if ((mouseX < ((width/3)+200)) && (mouseX > (width/3)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
      //goes to Hawthorne
      state = 22;
    }
    if ((mouseX < (width - (width/3))) && (mouseX > ((width-(width/3))-200)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
      //goes to RIP
      state = 2;
    }
  }
  
  if (state == 20) { //qLemon
      //press yesButton
    if ((mouseX < ((width/3)+200)) && (mouseX > (width/3)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
      //goes to eatLemons
      state = 28;
    }
    if ((mouseX < (width - (width/3))) && (mouseX > ((width-(width/3))-200)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
      //goes to cats
      state = 21;
    }
  }
  
  if (state == 19) { //qShrouded
      //press yesButton
    if ((mouseX < ((width/3)+200)) && (mouseX > (width/3)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
      //goes to question about lemons
      state = 20;
    }
    if ((mouseX < (width - (width/3))) && (mouseX > ((width-(width/3))-200)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
      //goes to RIP
      state = 2;
    }
  }
  
  if (state == 18) { //qBloated
      //press yesButton
    if ((mouseX < ((width/3)+200)) && (mouseX > (width/3)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
      //goes RIP
      state = 2;
    }
    if ((mouseX < (width - (width/3))) && (mouseX > ((width-(width/3))-200)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
      //goes qShroud
      state = 19;
    }
  }
  
 if (state == 15) { //richMansion
    //press yesButton
    if ((mouseX < ((width/3)+200)) && (mouseX > (width/3)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
      //goes to paleNight
      state = 29;
    }
    if ((mouseX < (width - (width/3))) && (mouseX > ((width-(width/3))-200)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
      //goes to RIP
      state = 2;
     }
 }
  
  if (state == 17) { //qBats
      //press yesButton
    if ((mouseX < ((width/3)+200)) && (mouseX > (width/3)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
      //goes to mansion
      state = 15;
    }
    if ((mouseX < (width - (width/3))) && (mouseX > ((width-(width/3))-200)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
      //goes to RIP
      state = 2;
    }
  }
  
  if (state == 16) { //oldBite
     if ((mouseX < ((width/2)+100)) && (mouseX > ((width/2)-100)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
      //goes to vampireVictory
      state = 24;
    }
  }
  
 if (state == 33) { //nightOwl : had to be after state == 16
    if ((mouseX < ((width/3)+200)) && (mouseX > (width/3)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
      //goes to oldBite
      state = 16;
    }
    if ((mouseX < (width - (width/3))) && (mouseX > ((width-(width/3))-200)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
      //goes to notVamp
      state = 11;
    }
  }
  
  if (state == 14) { //bWhite
      //press yesButton
    if ((mouseX < ((width/3)+200)) && (mouseX > (width/3)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
      //goes to mansion
      state = 15;
    }
    if ((mouseX < (width - (width/3))) && (mouseX > ((width-(width/3))-200)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
      //goes to RIP
      state = 2;
    }
  }
  
  if (state == 13) { //sexyBite
      if ((mouseX < ((width/2)+100)) && (mouseX > ((width/2)-100)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
        //goes to vampireVictory
        state = 24;
      }
  }
  
  if (state == 10) { //sexy
      //press yesButton
    if ((mouseX < ((width/3)+200)) && (mouseX > (width/3)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
      //goes to pale2
      state = 30;
    }
    if ((mouseX < (width - (width/3))) && (mouseX > ((width-(width/3))-200)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
      //goes to RIP
      state = 2;
    }
  }
  
  if (state == 9) { //qBuffy
      //press yesButton
    if ((mouseX < ((width/3)+200)) && (mouseX > (width/3)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
      //goes to areBuffy
      state = 26;
    }
    if ((mouseX < (width - (width/3))) && (mouseX > ((width-(width/3))-200)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
      //goes to sexy
      state = 10;
    }
  }
  
  if (state == 8) { //qEra
      //press earlierButton
      if (( mouseX < 285) && ( mouseX > 75) && ( mouseY > 400) && ( mouseY < 452) &&  mouseIsPressed) {
        //goes to qBloated
        state = 18;
      }
      //press 19th c button
      if (( mouseX < 425) && ( mouseX > 275) && ( mouseY > 400) && ( mouseY < 452) &&  mouseIsPressed) {
        //goes to qBats
        state = 17;
      }
      //press 30s button
      if (( mouseX < 625) && ( mouseX > 475) && ( mouseY > 400) && ( mouseY < 452) &&  mouseIsPressed) {
        //goes to bWhite
        state = 14;
      }
      //press 90s button
      if (( mouseX < 825) && ( mouseX > 675) && ( mouseY > 400) && ( mouseY < 452) &&  mouseIsPressed) {
        //goes to qBuffy
        state = 9;
      }
      //press modern button
      if (( mouseX < 1025) && ( mouseX > 875) && ( mouseY > 400) && ( mouseY < 452) &&  mouseIsPressed) {
        //goes to sexy
        state = 10;
      }
  }
  
 if (state == 3) { //qWerewolf
      //press yesButton
      if ((mouseX < ((width/3)+200)) && (mouseX > (width/3)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
        //goes to wolf screen
        state = 5;
      }
      if ((mouseX < (width - (width/3))) && (mouseX > ((width-(width/3))-200)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
        //goes to qEra
        state = 8;
      }
  }
  
  if (state == 6) { //qZombie
      //press yesButton
      if ((mouseX < ((width/3)+200)) && (mouseX > (width/3)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
        //goes to zombie screen
        state = 7;
      }
      if ((mouseX < (width - (width/3))) && (mouseX > ((width-(width/3))-200)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
        //goes to werewolf question
        state = 3;
      }
  }
  
  
  if (state == 1) { //qGrail
      //press yesButton
      if ((mouseX < ((width/3)+200)) && (mouseX > (width/3)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
        //goes to grailTime
        state = 25;
      }
      if ((mouseX < (width - (width/3))) && (mouseX > ((width-(width/3))-200)) && ( mouseY < 542) &&  mouseIsPressed) {
        //goes to qZombie
        state = 6;
      }
  }
  
  if (state == 0) { //titleScreen
      //press yesButton
      if ((mouseX < ((width/3)+200)) && (mouseX > (width/3)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
        //goes to grail question
        state = 1;
      }
      if ((mouseX < (width - (width/3))) && (mouseX > ((width-(width/3))-200)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
        //goes to RIP
        state = 2;
      }
  }
  
  if (state == 12) { //notTwilightMovie
    if ((mouseX < ((width/2)+100)) && (mouseX > ((width/2)-100)) && ( mouseY > 500) && ( mouseY < 542) &&  mouseIsPressed) {
        //goes to sexyBite
        state = 13;
      }
  }
  
} //end of mousePressed










