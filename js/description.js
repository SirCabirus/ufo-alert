let instructionLine;
let ufoLine;
let speedUfoLine;
let cmdUfoLine;
let medoRocketLine;

const enInstruction = 
  "Aliens from deep space appear with their UFOs and plan an invasion of planet Alpha X. " +
  "Don't let the UFOs escape. If you collide with a UFO, your spaceship will explode. " +
  "You have three spaceships, if you lose them or three UFOs reach the left edge of " +
  "the screen, the game is over. Control the spaceship with the cursor keys " +
  "arrow-up and arrow-down. Use the spacebar to shoot at the UFOs. " +
  "Avoid continuous fire to prevent your laser from overheating and failing. " +
  "Restart with Ctrl+R or F5.";
const deInstruction = 
  "Aliens aus den Tiefen des Weltalls erscheinen mit ihren UFOs und planen eine Invasion des Planeten Alpha X. " +
  "Lass die UFOs nicht entkommen. Wenn du mit einem UFO kollidierst, explodiert " +
  "dein Raumschiff. Du hast drei Raumschiffe, wenn du sie verlierst oder drei UFOs " +
  "den linken Bildrand erreichen, ist das Spiel vorbei. Steuere das Raumschiff mit " +
  "den Cursor-Tasten Pfeil-hoch und Pfeil-runter. Mit der Leertaste kannst du auf die UFOs schießen. " +
  "Vermeide Dauerfeuer, damit sich Dein Laser nicht überhitzt und versagt. " + 
  "Restart mit Strg+R oder F5.";

const enUfo = "These UFOs are usually slow and can be easily repelled.";
const deUfo = "Diese UFOs sind meist langsam und lassen sich leicht abwehren.";

const enUfoSpeed = "Beware of the fast black UFOs.";
const deUfoSpeed = "Vorsicht vor den schnellen schwarzen UFOs.";

const enCmdUfo = 
  "The large UFOs are the command centers of the aliens. You have to hit them several times to destroy them. " +
  "Sometimes the command centers have a defensive missile. You can't destroy this defensive missile and you have to avoid it.";
const deCmdUfo = 
  "Die großen UFOs sind die Kommandozentralen der Aliens. Du musst sie mehrmals treffen, um sie zu zerstören. " +
  "Manchmal verfügen die Kommadozentralen über eine Abwehrrakete. Du kannst diese Abwehrrakete nicht vernichten und musst ihr ausweichen.";

const enMedoRocket =
 "When you have fought well for some time, a supply spaceship will appear. Touch it with your spaceship to " +
 "get an additional spaceship. The supply spaceship cannot be shot down.";
const deMedoRocket =
  "Wenn Du einige Zeit gut gekämpft hast, erscheint ein Versorgungsraumschiff. Berühre es mit deinem Raumschiff um " + 
  "ein zusätzliches Raumschiff zu erhalten. Das Versorgungsraumschiff kann nicht abgeschossen werden.";

const enXbomb =
  "The X-bomb belongs to your spaceship. Fire it with the X-key. The X-bomb flies very fast into the middle of the battlefield " +
  "and eliminates all enemy objects. Use them wisely, each of your spaceships has only one X-bomb.";
  
  const deXbomb =
  "Die X-Bombe gehört zu deinem Raumschiff. Feuere sie mit der Taste-X ab. Die X-Bombe fliegt sehr schnell in die Mitte des Kampfgeschehens " +
  "und eliminiert alle feindlichen Objekte. Verwende sie weise, jedes deiner Raumschiff verfügt nur über eine X-Bombe.";    

function description() {
  // Anleitung - wenn Browsersprache nicht deutsch ist wird englisch ausgegeben
  instructionLine = document.getElementById("instruction");
  ufoLine = document.getElementById("ufo");
  speedUfoLine = document.getElementById("speedUfo");
  cmdUfoLine = document.getElementById("cmdUfo");
  medoRocketLine = document.getElementById("medoRocket");
  xBombLine =  document.getElementById("xBomb");

  if (navigator.language.indexOf("de") > -1) {
    instructionLine.textContent = deInstruction;
    ufoLine.textContent = deUfo;
    speedUfoLine.textContent = deUfoSpeed;
    cmdUfoLine.textContent = deCmdUfo;
    medoRocketLine.textContent = deMedoRocket;
    xBombLine.textContent = deXbomb;
  } else {
    instructionLine.textContent = enInstruction;
    ufoLine.textContent = enUfo;
    speedUfoLine.textContent = enUfoSpeed;
    cmdUfoLine.textContent = enCmdUfo;
    medoRocketLine.textContent = enMedoRocket;
    xBombLine.textContent = enXbomb;
  }

}