import * as dice from "./diceHelper.js";
import * as name from "./nameGenerator.js";
import * as race from "./raceGenerator.js";

export function generateCharacter() {
    const obj = {
        Name : name.generateName(),
        Race : race.generateRace(),
        Stats : {
            Strength: dice.rollStat(),
            Dexterity: dice.rollStat(),
            Constitution: dice.rollStat(),
            Intelligence: dice.rollStat(),
            Wisdom: dice.rollStat(),
            Charisma: dice.rollStat()
        }
    };

    return obj;
}




