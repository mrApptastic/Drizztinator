import * as dice from './diceHelper.js';
import * as origin from './raceGenerator.js';
import * as profession from './classGenerator.js';
import * as personality from './backgroundGenerator.js';

export function generateCharacter() {
  const gender = dice.roll(2) === 1 ? 'Male' : 'Female';
  const race = origin.generateRace();
  const name =
    race.Names[gender][Math.floor(Math.random() * race.Names[gender].length)] +
    ' ' +
    race.Names.Surname[Math.floor(Math.random() * race.Names.Surname.length)];
  const stats = {
    Strength: dice.rollStat(),
    Dexterity: dice.rollStat(),
    Constitution: dice.rollStat(),
    Intelligence: dice.rollStat(),
    Wisdom: dice.rollStat(),
    Charisma: dice.rollStat(),
  };
  const highest = getHighestStat(stats);

  const obj = {
    Id: new Date().getTime(),
    Name: name,
    Race: race,
    Gender: gender,
    Class: profession.generateClass(highest),
    Background: personality.generateBackground(),
    Alignment: generateAlignment(),
    Stats: stats,
  };

  return obj;
}

function generateAlignment() {
  const roll = dice.roll(45);

  if (roll <= 9) {
    return 'Chaotic Good';
  } else if (roll >= 10 && roll <= 17) {
    return 'Neutral Good';
  } else if (roll >= 18 && roll <= 24) {
    return 'Chaotic Neutral';
  } else if (roll >= 25 && roll <= 30) {
    return 'True Neutral';
  } else if (roll >= 31 && roll <= 35) {
    return 'Lawful Good';
  } else if (roll >= 36 && roll <= 39) {
    return 'Lawful Neutral';
  } else if (roll >= 40 && roll <= 42) {
    return 'Lawful Evil';
  } else if (roll >= 43 && roll <= 44) {
    return 'Neutral Evil';
  } else {
    return 'Chaotic Evil';
  }
}

function getHighestStat(stats) {
  let current = 0;
  let highest = '';
  for (let stat in stats) {
    if (stats[stat] > current) {
      current = stats[stat];
      highest = stat;
    }
  }

  return highest;
}
