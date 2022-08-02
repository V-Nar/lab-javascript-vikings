// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health,
        this.strength = strength
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}


// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength),
        this.name = name
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return `Odin Owns You All!`;
    }

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [],
        this.saxonArmy = []
    }
    addViking(Viking) {
        this.vikingArmy.push(Viking);
    };

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    };

    attackRound (attackerArmy, defenderArmy) {
        let defenderIndex = Math.floor(Math.random() * this[defenderArmy].length);
        const defender = this[defenderArmy][defenderIndex];
        const attacker = this[attackerArmy][Math.floor(Math.random() * this[attackerArmy].length)];
        const attack = defender.receiveDamage(attacker.strength); 
        if (defender.health <= 0) {
            this[defenderArmy].splice(this[defenderArmy][defenderIndex], 1);
        };
        return attack;
    }

    vikingAttack() {
        return this.attackRound('vikingArmy', 'saxonArmy');
    };

    saxonAttack() {
        return this.attackRound('saxonArmy', 'vikingArmy');
    };

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`;
        } else if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`;
        } else if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    };
}