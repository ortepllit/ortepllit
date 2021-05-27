
class hero {
    constructor(name, weapon) { 
        this.name = name;
        this.strength = 10;
        this.agility = 10;
        this.intelligence = 10;
        this.cunning = 10;
        this.calculateMaxHealthPoints();
        this.currentHealthPoints = this.maxHealthPoints;
        this.calculateMaxManaPoints();
        this.currentManaPoints = this.maxManaPoints;
        this.calculateSpeed();
        this.calculateDodge();
        this.weapon = weapon;
     }
     
     calculateMaxHealthPoints(){
     this.maxHealthPoints = 10+this.strength;    
     }
     calculateMaxManaPoints(){
         this.maxManaPoints = 10+this.intelligence;
     }

     recieveDamage(value){
        this.currentHealthPoints = this.currentHealthPoints-value;
        if (this.currentHealthPoints>this.maxHealthPoints){
            this.currentHealthPoints = this.maxHealthPoints;
        }
     }

     calculateSpeed(){
         this.speed = 10+this.agility;
     }

     calculateDodge(){
         this.dodge = 10+this.agility;
     }

     calculateHitChance(){
         this.hitChance = 10+this.agility+this.strength;
     }

     getHitChance(){
         this.calculateHitChance();
         return this.hitChance;
     }

     getSpeed(){
         this.calculateSpeed();
         return this.speed;
     }

     getDodge(){
         this.calculateDodge();
         return this.dodge;
     }

     getWeapon(){
         return this.weapon;
     }

     

     calculateInflictedWeaponDamage(){
         return randomInteger(this.getWeapon().getDamageRange()[0],this.getWeapon().getDamageRange()[1]);
     }

     weaponHit(opponent){
        let hitChance = randomInteger(1,this.getHitChance());
        let dodge = randomInteger(1,opponent.getDodge());
        if(hitChance>=dodge){
            let damage = this.calculateInflictedWeaponDamage();
            opponent.recieveDamage(damage);
            console.log(this.name+" hitchance: "+hitChance+" / "+opponent.name+"dodge: "+dodge+" -> "+damage+" damage inflicted");
        }
        else{
            console.log(this.name+" hitchance: "+hitChance+" / "+opponent.name+"dodge: "+dodge+" -> miss");
        }
        
    }



     fight(opponent){
         currentOpponent = opponent;
         var fightCounter = -1;
         var self = this;
         var playerInitiative = true;
         
        function startRound(){
            playerInitiative = (playerCharacter.getSpeed()>=currentOpponent.getSpeed());
            updateValues();
            console.log("start round");
            
         }

         function turn(initiative, noInitiative){
             console.log("initiative: "+initiative.name);
             initiative.weaponHit(noInitiative);
             updateValues();
         }

         function endRound(){
            updateValues();
            console.log("end round");
         }

         function nextStep(player,opponent){
             fightCounter = (fightCounter+1)%4
            switch(fightCounter){
                case 0: startRound(player,opponent);
                        break;
                case 1: if(playerInitiative){
                            turn(player,opponent);
                        }
                        else{
                            turn(opponent,player);
                        }
                        break;
                case 2: if(!playerInitiative){
                            turn(player,opponent);
                        }
                        else{
                            turn(opponent,player);
                        }
                            break;
                case 3: endRound(player,opponent);
            }
            if (player.currentHealthPoints<=0||opponent.currentHealthPoints<=0){
                clearInterval(fightInterval);
            }

             

         }
        

        var fightInterval = setInterval(function(){ nextStep(self,opponent) }, 1000);

     }





     


  }