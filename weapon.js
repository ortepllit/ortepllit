class weapon {
    constructor(name, damageRange, comboRate, critChance, critDamage) { 
        this.name = name;
        this.damageRange = damageRange;
        this.comboRate = comboRate;
        this.critChance = critChance;
        this.critDamage = critDamage;
     }
     getDamageRange(){
         return this.damageRange;
     }

    }



    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }