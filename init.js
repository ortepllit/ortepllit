var Dagger = new weapon("Dagger", [2,3],1,0.3,1.3);
var Sword = new weapon("Sword", [1,4],1,0.1,2);

var IceFrog = new hero("IceFrog",Dagger);
var GabeNewell = new hero("Gabe Newell",Sword);

var playerCharacter = IceFrog;
var currentOpponent = GabeNewell;

updateValuesOpponent();
updateValuesPlayer();

playerCharacter.fight(GabeNewell);




