function updateValuesPlayer(){
    $('#namePlayer').text(playerCharacter.name);
    $('#healthPointsPlayer').text(playerCharacter.currentHealthPoints+"/"+playerCharacter.maxHealthPoints);
    $('#manaPointsPlayer').text(playerCharacter.currentManaPoints+"/"+playerCharacter.maxManaPoints);
    $('#weaponPlayer').text(playerCharacter.getWeapon().name);
}
function updateValuesOpponent(){
    $('#nameOpponent').text(currentOpponent.name);
    $('#healthPointsOpponent').text(currentOpponent.currentHealthPoints+"/"+currentOpponent.maxHealthPoints);
    $('#manaPointsOpponent').text(currentOpponent.currentManaPoints+"/"+currentOpponent.maxManaPoints);
    $('#weaponOpponent').text(currentOpponent.getWeapon().name);
}

function updateValues(){
    updateValuesPlayer();
    updateValuesOpponent();
}