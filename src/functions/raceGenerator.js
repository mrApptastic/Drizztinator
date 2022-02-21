import * as dice from "./diceHelper.js";

export function generateRace() {
    const roll = dice.roll(100);

    if (roll >= 1 && roll <= 5) {
        return {
            Name: "Dragonborn",
            Modifiers : {
                Strength: 2,
                Dexterity: 0,
                Constitution: 0,
                Intelligence: 0,
                Wisdom: 0,
                Charisma: 1
            }
        };
    } else if (roll >= 6 && roll <= 15) {
        return {
            Name: "Gnome",
            Modifiers : {
                Strength: 0,
                Dexterity: 0,
                Constitution: 0,
                Intelligence: 2,
                Wisdom: 0,
                Charisma: 0
            }
        };
    } else if (roll >= 16 && roll <= 25) {
        return {
            Name: "Dwarf",
            Modifiers : {
                Strength: 0,
                Dexterity: 0,
                Constitution: 2,
                Intelligence: 0,
                Wisdom: 0,
                Charisma: 0
            }
        };
    } else if (roll >= 26 && roll <= 60) {
        return {
            Name: "Human",
            Modifiers : {
                Strength: 1,
                Dexterity: 1,
                Constitution: 1,
                Intelligence: 1,
                Wisdom: 1,
                Charisma: 1
            }
        };
    } else if (roll >= 61 && roll <= 70) {
        return {
            Name: "Elf",
            Modifiers : {
                Strength: 0,
                Dexterity: 2,
                Constitution: 0,
                Intelligence: 0,
                Wisdom: 0,
                Charisma: 0
            }
        };
    } else if (roll >= 71 && roll <= 80) {
        return {
            Name: "Half-Elf",
            Modifiers : {
                Strength: 1,
                Dexterity: 1,
                Constitution: 0,
                Intelligence: 0,
                Wisdom: 0,
                Charisma: 2
            }
        };
    } else if (roll >= 81 && roll <= 90) {
        return {
            Name: "Halfling",
            Modifiers : {
                Strength: 0,
                Dexterity: 2,
                Constitution: 0,
                Intelligence: 0,
                Wisdom: 0,
                Charisma: 0
            }
        };
    } else if (roll >= 91 && roll <= 95) {
        return {
            Name: "Half-Orc",
            Modifiers : {
                Strength: 2,
                Dexterity: 0,
                Constitution: 1,
                Intelligence: 0,
                Wisdom: 0,
                Charisma: 0
            }
        };
    } else if (roll >= 96 && roll <= 100) {
        return {
            Name: "Tiefling",
            Modifiers : {
                Strength: 0,
                Dexterity: 0,
                Constitution: 0,
                Intelligence: 1,
                Wisdom: 0,
                Charisma: 2
            }
        };
    }
}