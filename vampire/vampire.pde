PImage yesButton, noButton, modernButton, nintiesButton, thirtiesButton, ninteenthButton, earlierButton;
PImage tombstone, fangs, grail, werewolf, lilZombie, bat, mountains, cloud;
PImage mountainsMansion;

PFont type, smallType;

int state = 0;

int batX = 50;
int batY = 100;
int cloudX = 700;

String title, questionGrail, questionZombie, questionWerewolf, questionEra, questionBuffy, sexyPerson;
String grailQuest, grailQuest2, wolfie, zombified;
String questionPale, questionLoner, questionNight, questionSparkle, notVamp, notTwilight;
String sexyBite1, sexyBite2, sexyBite3;
String blackWhite, mansion, stake;
String batTurn, sips, vanHelsing, religious, cross;
String bloated, shroud, citrus, lemon, catJump, hawthorne, burn, milletRice;
String victory, alone, buffy;
String historyBat, historyLemon, historyMillet, historyShroud, historyHawthorne, historyCat, historyBloat;

void setup() {
  size(1100, 600);
  
  type = loadFont("AmericanTypewriter-48.vlw");
  smallType = loadFont("AmericanTypewriter-14.vlw");
  
  mountainsMansion = loadImage("mountainsMansionSmall.png");
  cloud = loadImage("cloud.png");
  mountains = loadImage("mountainsSmall.png");
  bat = loadImage("batSmall.png");
//  fangs = loadImage("fangsSmall.png");
  fangs = loadImage("fangsCardboard.png");
  yesButton = loadImage("yesButton.png");
  noButton = loadImage("noButton.png");
//  tombstone = loadImage("tombstoneSmall.png");
  tombstone = loadImage("tombstoneC.png");
  grail = loadImage("grail.png");
//  werewolf = loadImage("werewolf.png");
  werewolf = loadImage("wolfC.png");
  lilZombie = loadImage("zombieSmall.png");
  modernButton = loadImage("modernButton.png");
  nintiesButton = loadImage("90sButton.png");
  thirtiesButton = loadImage("30sButton.png");
  ninteenthButton = loadImage("19thCButton.png");
  earlierButton = loadImage("earlierButton.png");
  
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
  buffy = "Well you can't BE a vampire if you're here to SLAY vampires. Go find Angel and stare at each other longingly already.";
  historyBloat = "Before the 19th century, vampires were thought to be noticeably bloated with the blood of their victims. Squishy.";
  historyCat = "In Chinese and Slavic lore, if a cat, particularly a black cat, jumps over your corpse, you are very likely to become a vampire. True story.";
  historyLemon = "Apparently a lemon in your mouth (corpse mouth, obviously) will keep you from turning into a vampire after death.";
  historyHawthorne = "Hawthorne makes the best stake! Ash and oak are less effective, but just make sure to get rid of all the potential weapons.";
  historyMillet = "In several cultures, pouring millet or rice on a person's grave will keep them from turning into a vampire. In other cultures it will just slow vampires down because they have to stop and count each grain before they can move on. So maybe it doesn't keep you from turning, but it WILL get you very, very bored. Vampires with OCD are particularly susceptible.";
  historyBat = "Bram Stoker's Dracula is the first integration of the bat phenomena, so you will probably have to turn into a bat if you want to be this badass vamp.";
  historyShroud = "Pre-svelte vamps wore their funeral shrouds around (talk about a boring outfit) and slept with their left eye open. Creepy.";
  
}

void draw() {
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

void titleScreen() {
   rectMode(CENTER);
   textAlign(CENTER);
   textFont(type);
   fill(28, 195, 217);
   text(title, ((width)/2), ((height)/2), 500, 200);
   image(mountains, -55, 250);
   image(cloud, cloudX, 350);
   image(yesButton, 300, 500);
   image(noButton, 600, 500);
   if ((mouseX > 700) && (mouseX < 850) && (mouseY > 350) && (mouseY < 410) && mousePressed) {
     cloudX--;
   }
}

void rip() {
   image(tombstone,  width/3,  height/3);
   if ((mouseX > 450) && (mouseX < 650) && (mouseY > 200) && (mouseY < 400) && mousePressed) {
     state = 0;
   }
}

 void qGrail() {
   rectMode( CENTER);
   textAlign( CENTER);
   textFont(type);
   text(questionGrail,  width/2,  height/2, 500, 200);
   image(yesButton, 300, 500);
   image(noButton, 600, 500);
}

void grailTime() {
   rectMode( CENTER);
   textAlign( CENTER);
   textFont(type);
   text(grailQuest,  width/2,  height/5, 500, 200);
   text(grailQuest2,  width/2, ( height - ( height/9)), 500, 200);
   image(grail,  width/2.5,  height/5);
}

void qZombie() {
   rectMode( CENTER);
   textAlign( CENTER);
   textFont(type);
   text(questionZombie,  width/2,  height/2, 500, 200);
   image(yesButton, 300, 500);
   image(noButton, 600, 500);
}

void zombie() {
   rectMode( CENTER);
   textAlign( CENTER);
   textFont(type);
   text(zombified,  width/2,  height/5, 500, 200);
   image(lilZombie,  width/8,  height/4);
}

void qWerewolf() {
   rectMode( CENTER);
   textAlign( CENTER);
   textFont(type);
   text(questionWerewolf,  width/2,  height/2, 500, 200);
   image(yesButton, 300, 500);
   image(noButton, 600, 500);
}

void wolf() {
   rectMode( CENTER);
   textAlign( CENTER);
   textFont(type);
   text(wolfie,  width/2,  height/5, 500, 200);
   image(werewolf,  width/3,  height/5);
}

void qEra() {
   rectMode( CENTER);
   textAlign( CENTER);
   textFont(type);
   text(questionEra,  width/2,  height/2, 500, 200);
   image(earlierButton, 75, 400);
   image(ninteenthButton, 275, 400);
   image(thirtiesButton, 475, 400);
   image(nintiesButton, 675, 400);
   image(modernButton, 875, 400);
}

void qBloated() {
   rectMode( CENTER);
   textAlign( CENTER);
   textFont(type);
   text(bloated,  width/2,  height/2, 500, 200);
   textFont(smallType);
   text(historyBloat, width/2, 400, 800, 100);
   image(yesButton, 300, 500);
   image(noButton, 600, 500);
}

void qShroud() {
   rectMode( CENTER);
   textAlign( CENTER);
   textFont(type);
   text(shroud,  width/2,  height/2, 500, 200);
   textFont(smallType);
   text(historyShroud, width/2, 450, 800, 100);
   image(yesButton, 300, 500);
   image(noButton, 600, 500);
}

void qLemon() {
   rectMode( CENTER);
   textAlign( CENTER);
   textFont(type);
   text(citrus,  width/2,  height/2, 500, 200);
   image(yesButton, 300, 500);
   image(noButton, 600, 500);
}

void eatLemons() {
   rectMode( CENTER);
   textAlign( CENTER);
   textFont(type);
   text(lemon,  width/2,  height/2, 500, 200);
   textFont(smallType);
   text(historyLemon, width/2, 400, 800, 100);
   image(yesButton, 300, 500);
   image(noButton, 600, 500);
}

void qCat() {
   rectMode( CENTER);
   textAlign( CENTER);
   textFont(type);
   text(catJump,  width/2,  height/2, 500, 200);
   textFont(smallType);
   text(historyCat, width/2, 400, 800, 100);
   image(yesButton, 300, 500);
   image(noButton, 600, 500);
}

void qHawthorne() {
   rectMode( CENTER);
   textAlign( CENTER);
   textFont(type);
   text(hawthorne,  width/2,  height/2, 500, 200);
   image(yesButton, 300, 500);
   image(noButton, 600, 500);
}

void burnIt() {
   rectMode( CENTER);
   textAlign( CENTER);
   textFont(type);
   text(burn,  width/2,  height/2, 500, 200);
   textFont(smallType);
   text(historyHawthorne, width/2, 400, 800, 100);
   image(yesButton, 300, 500);
   image(noButton, 600, 500);
}

void qMillet() {
   rectMode( CENTER);
   textAlign( CENTER);
   textFont(type);
   text(milletRice,  width/2,  height/3, 800, 200);
   textFont(smallType);
   text(historyMillet, width/2, 350, 600, 100);
   image(yesButton, 300, 500);
   image(noButton, 600, 500);
}

void qBats() {
   rectMode( CENTER);
   textAlign( CENTER);
   textFont(type);
   text(batTurn,  width/2,  height/3, 500, 200);
   textFont(smallType);
   text(historyBat, width/2, 400, 800, 100);
   image(yesButton, 300, 500);
   image(noButton, 600, 500);
   image(bat, batX, batY);
   if ((mouseX < 450) && (mouseX > 50) && (mouseY > 100) && (mouseY < 300) && mousePressed) {
      batX++;
      batY--; 
    }
}

void bWhite() {
   rectMode( CENTER);
   textAlign( CENTER);
   textFont(type);
   text(blackWhite,  width/2,  height/2, 500, 200);
   image(yesButton, 300, 500);
   image(noButton, 600, 500);
}
void richMansion() {
   rectMode( CENTER);
   image(mountainsMansion, -55, 150);
   textAlign( CENTER);
   textFont(type);
   text(mansion,  width/2,  height/4, 500, 200);
   image(yesButton, 300, 500);
   image(noButton, 600, 500);
}

void paleNight() {
   rectMode( CENTER);
   textAlign( CENTER);
   textFont(type);
   text(questionPale,  width/2,  height/5, 500, 50);
   image(yesButton, 300, ( height/5)+100);
   image(noButton, 600, ( height/5)+100);
}

void nightOwl() {
   rectMode( CENTER);
   textAlign( CENTER);
   textFont(type);
   text(questionPale,  width/2,  height/5, 500, 50);
   image(yesButton, 300, ( height/5)+100);
   image(noButton, 600, ( height/5)+100);
   text(questionNight,  width/2,  400, 500, 50);
   image(yesButton, 300, 500);
   image(noButton, 600, 500);
}

void notVampire() {
   rectMode( CENTER);
   textAlign( CENTER);
   textFont(type);
   text(notVamp,  width/2,  height/5, 500, 200);
   image(tombstone,  width/2,  height/3);
   if ((mouseX > 450) && (mouseX < 650) && (mouseY > 200) && (mouseY < 400) && mousePressed) {
     state = 0;
   }
}

void oldBite() {
   rectMode( CENTER);
   textAlign( CENTER);
   textFont(type);
   text(sips,  width/2,  height/4, 500, 200);
   text(stake,  width/2,  350, 700, 200);
   image(yesButton, 450, 500);
}

void sexy() {
   rectMode( CENTER);
   textAlign( CENTER);
   textFont(type);
   text(sexyPerson,  width/2,  height/2, 500, 200);
   image(yesButton, 300, 500);
   image(noButton, 600, 500);
}

void pale2() {
   rectMode( CENTER);
   textAlign( CENTER);
   textFont(type);
   text(questionPale, width/2, height/5, 500, 50);
   image(yesButton, 300, (height/5)+100);
   image(noButton, 600, (height/5)+100);
}

void nightOwl2() {
   rectMode( CENTER);
   textAlign( CENTER);
   textFont(type);
   text(questionPale, width/2, height/5, 500, 50);
   image(yesButton, 300, (height/5)+100);
   image(noButton, 600, (height/5)+100);
   text(questionNight, width/2, 350, 500, 50);
   image(yesButton, 300, 500);
   image(noButton, 600, 500); 
}

void sparkle() {
   rectMode( CENTER);
   textAlign( CENTER);
   textFont(type);
   text(questionSparkle,  width/2,  height/2, 500, 200);
   image(yesButton, 300, 500);
   image(noButton, 600, 500);
}

void notTwilightMovie() {
   rectMode( CENTER);
   textAlign( CENTER);
   textFont(type);
   text(notTwilight,  width/2,  height/2, 500, 200);
   image(yesButton, 450, 500);
}

void sexyBite() {
   rectMode( CENTER);
   textAlign( CENTER);
   textFont(type);
   text(sexyBite1,  width/2,  height/5, 500, 100);
   text(sexyBite2,  width/2,  height/2, 500, 100);
   text(sexyBite3,  width/2, ( height - ( height/3)), 500, 100);
   image(yesButton, 450, 500);
}

void qBuffy() {
   rectMode( CENTER);
   textAlign( CENTER);
   textFont(type);
   text(questionBuffy,  width/2,  height/2, 500, 200);
   image(yesButton, 300, 500);
   image(noButton, 600, 500);
}

void areBuffy() {
   rectMode( CENTER);
   textAlign( CENTER);
   textFont(type);
   text(buffy,  width/2,  height/2, 800, 300);
}

void vampireVictory() {
   rectMode( CENTER);
   textAlign( CENTER);
   textFont(type);
   text(victory,  width/2,  height/3, 500, 300);
   text(alone,  width/2, ( height - ( height/4)), 500, 300);
   image(fangs,  width/8,  height/6);
}

void mousePressed() {
  
  if (state == 31) { //sparkle
      //press yesButton
    if (( mouseX < 500) && ( mouseX > 300) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes to sexyBite
      state = 13;
    }
    if (( mouseX < 800) && ( mouseX > 600) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes to notTwilightMovie
      state = 12;
    }
  }
  
  if (state == 32) { //nightOwl2
    if (( mouseX < 500) && ( mouseX > 300) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes to sparkle
      state = 31;
    }
    if (( mouseX < 800) && ( mouseX > 600) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes to notVamp
      state = 11;
    }
  }
  
  if (state == 30) { //pale2
     //press yesButton
    if (( mouseX < 500) && ( mouseX > 300) && ( mouseY > (( height/5)+100)) && ( mouseY < (( height/5)+142)) &&  mousePressed) {
      //brings up nightOwl2 question
       state = 32;
    }
    if (( mouseX < 800) && ( mouseX > 600) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes to notVampire
      state = 11;
    }
  }
  
  if (state == 29) { //paleNight
    //press yesButton
    if (( mouseX < 500) && ( mouseX > 300) && ( mouseY > (( height/5)+100)) && ( mouseY < (( height/5)+142)) &&  mousePressed) {
      //goes to nightOwl
       state = 33;
    }
    if (( mouseX < 800) && ( mouseX > 600) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes to notVampire
      state = 11;
    }
  }
  
  if (state == 28) { //eatLemons
    //press yesButton
    if (( mouseX < 500) && ( mouseX > 300) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes to cats
      state = 21;
    }
    if (( mouseX < 800) && ( mouseX > 600) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes to RIP
      state = 2;
    }
  }
  
    if (state == 23) { //qMillet
      //press yesButton
    if (( mouseX < 500) && ( mouseX > 300) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes to vampireVictory
      state = 24;
    }
    if (( mouseX < 800) && ( mouseX > 600) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes to RIP
      state = 2;
    }
  }
  
  if (state == 27) { //burnIt
    //press yesButton
    if (( mouseX < 500) && ( mouseX > 300) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes to millet and rice
      state = 23;
    }
    if (( mouseX < 800) && ( mouseX > 600) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes to RIP
      state = 2;
    }
  }
  
  if (state == 22) { //qHawthorne
      //press yesButton
    if (( mouseX < 500) && ( mouseX > 300) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes to burnIt
      state = 27;
    }
    if (( mouseX < 800) && ( mouseX > 600) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes to millet & rice
      state = 23;
    }
  }
  
  if (state == 21) { //qCat
      //press yesButton
    if (( mouseX < 500) && ( mouseX > 300) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes to Hawthorne
      state = 22;
    }
    if (( mouseX < 800) && ( mouseX > 600) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes to RIP
      state = 2;
    }
  }
  
  if (state == 20) { //qLemon
      //press yesButton
    if (( mouseX < 500) && ( mouseX > 300) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes to eatLemons
      state = 28;
    }
    if (( mouseX < 800) && ( mouseX > 600) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes to cats
      state = 21;
    }
  }
  
  if (state == 19) { //qShrouded
      //press yesButton
    if (( mouseX < 500) && ( mouseX > 300) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes to question about lemons
      state = 20;
    }
    if (( mouseX < 800) && ( mouseX > 600) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes to RIP
      state = 2;
    }
  }
  
  if (state == 18) { //qBloated
      //press yesButton
    if (( mouseX < 500) && ( mouseX > 300) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes RIP
      state = 2;
    }
    if (( mouseX < 800) && ( mouseX > 600) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes qShroud
      state = 19;
    }
  }
  
 if (state == 15) { //richMansion
    //press yesButton
    if (( mouseX < 500) && ( mouseX > 300) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes to paleNight
      state = 29;
    }
    if (( mouseX < 800) && ( mouseX > 600) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes to RIP
      state = 2;
     }
 }
  
  if (state == 17) { //qBats
      //press yesButton
    if (( mouseX < 500) && ( mouseX > 300) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes to mansion
      state = 15;
    }
    if (( mouseX < 800) && ( mouseX > 600) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes to RIP
      state = 2;
    }
  }
  
  if (state == 16) { //oldBite
     if (( mouseX < 650) && ( mouseX > 450) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes to vampireVictory
      state = 24;
    }
  }
  
 if (state == 33) { //nightOwl : had to be after state == 16
    if (( mouseX < 500) && ( mouseX > 300) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes to oldBite
      state = 16;
    }
    if (( mouseX < 800) && ( mouseX > 600) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes to notVamp
      state = 11;
    }
  }
  
  if (state == 14) { //bWhite
      //press yesButton
    if (( mouseX < 500) && ( mouseX > 300) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes to mansion
      state = 15;
    }
    if (( mouseX < 800) && ( mouseX > 600) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes to RIP
      state = 2;
    }
  }
  
  if (state == 13) { //sexyBite
      if (( mouseX < 650) && ( mouseX > 450) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
        //goes to vampireVictory
        state = 24;
      }
  }
  
  if (state == 10) { //sexy
      //press yesButton
    if (( mouseX < 500) && ( mouseX > 300) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes to pale2
      state = 30;
    }
    if (( mouseX < 800) && ( mouseX > 600) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes to RIP
      state = 2;
    }
  }
  
  if (state == 9) { //qBuffy
      //press yesButton
    if (( mouseX < 500) && ( mouseX > 300) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes to areBuffy
      state = 26;
    }
    if (( mouseX < 800) && ( mouseX > 600) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
      //goes to sexy
      state = 10;
    }
  }
  
  if (state == 8) { //qEra
      //press earlierButton
      if (( mouseX < 285) && ( mouseX > 75) && ( mouseY > 400) && ( mouseY < 452) &&  mousePressed) {
        //goes to qBloated
        state = 18;
      }
      //press 19th c button
      if (( mouseX < 425) && ( mouseX > 275) && ( mouseY > 400) && ( mouseY < 452) &&  mousePressed) {
        //goes to qBats
        state = 17;
      }
      //press 30s button
      if (( mouseX < 625) && ( mouseX > 475) && ( mouseY > 400) && ( mouseY < 452) &&  mousePressed) {
        //goes to bWhite
        state = 14;
      }
      //press 90s button
      if (( mouseX < 825) && ( mouseX > 675) && ( mouseY > 400) && ( mouseY < 452) &&  mousePressed) {
        //goes to qBuffy
        state = 9;
      }
      //press modern button
      if (( mouseX < 1025) && ( mouseX > 875) && ( mouseY > 400) && ( mouseY < 452) &&  mousePressed) {
        //goes to sexy
        state = 10;
      }
  }
  
 if (state == 3) { //qWerewolf
      //press yesButton
      if (( mouseX < 500) && ( mouseX > 300) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
        //goes to wolf screen
        state = 5;
      }
      if (( mouseX < 800) && ( mouseX > 600) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
        //goes to qEra
        state = 8;
      }
  }
  
  if (state == 6) { //qZombie
      //press yesButton
      if (( mouseX < 500) && ( mouseX > 300) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
        //goes to zombie screen
        state = 7;
      }
      if (( mouseX < 800) && ( mouseX > 600) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
        //goes to werewolf question
        state = 3;
      }
  }
  
  
  if (state == 1) { //qGrail
      //press yesButton
      if (( mouseX < 500) && ( mouseX > 300) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
        //goes to grailTime
        state = 25;
      }
      if (( mouseX < 800) && ( mouseX > 600) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
        //goes to qZombie
        state = 6;
      }
  }
  
  if (state == 0) { //titleScreen
      //press yesButton
      if (( mouseX < 500) && ( mouseX > 300) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
        //goes to grail question
        state = 1;
      }
      if (( mouseX < 800) && ( mouseX > 600) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
        //goes to RIP
        state = 2;
      }
  }
  
  if (state == 12) { //notTwilightMovie
    if (( mouseX < 650) && ( mouseX > 450) && ( mouseY > 500) && ( mouseY < 542) &&  mousePressed) {
        //goes to sexyBite
        state = 13;
      }
  }
  
} //end of mousePressed
