import * as dice from "./diceHelper.js";

export function generateRace() {
    const roll = dice.roll(100);

    if (roll <= 5) {
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
    } else if (roll <= 15) {
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
    } else if (roll <= 25) {
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
    } else if (roll <= 40) {
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
    } else if (roll <= 60) {
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
    } else if (roll <= 70) {
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
    } else if (roll <= 80) {
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
    } else if (roll <= 90) {
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
    } else if (roll <= 95) {
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