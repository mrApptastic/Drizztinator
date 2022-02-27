import { Ib } from '../assets/characterSheet.js';
import * as charGen from '../functions/characterGenerator.js';
import * as rule from '../functions/rules.js';
import * as dice from '../functions/diceHelper.js';

import { PDFDocument } from 'pdf-lib';

export async function downloadCharacter(character) {
  // const character = charGen.generateCharacter();
  const formUrl = Ib;
 
  const formPdfBytes = await fetch(formUrl, {
    mode: 'cors',
    cache: 'no-cache'
  }).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();

  /* Basic Info */
  form.getTextField('CharacterName').setText(character.Name);
  form.getTextField('CharacterName 2').setText(character.Name);
  form.getTextField('Race ').setText(character.Race.Name);
  form.getTextField('ClassLevel').setText(character.Class.Name + " 1");
  form.getField('Alignment').setText(character.Alignment);
  form.getField('ProfBonus').setText("2");
  form.getField('Background').setText(character.Background.Name);
  form.getField('Speed').setText(character.Race.Speed + " ft.");
    /* Stats N' Stuff */
  const str = parseInt(character.Race.Modifiers.Strength + character.Stats.Strength);
  const strBonus = rule.getStatBonus(str);
  form.getTextField('STR').setText(str.toString());
  form.getTextField('STRmod').setText(strBonus.toString());
  const dex = parseInt(character.Race.Modifiers.Dexterity + character.Stats.Dexterity);
  const dexBonus = rule.getStatBonus(dex);
  form.getTextField('DEX').setText(dex.toString());
  form.getTextField('DEXmod ').setText(dexBonus.toString());
  form.getTextField('Initiative').setText(dexBonus.toString());
  const con = parseInt(character.Race.Modifiers.Constitution + character.Stats.Constitution);
  const conBonus = rule.getStatBonus(con);
  form.getTextField('CON').setText(con.toString());
  form.getTextField('CONmod').setText(conBonus.toString());
  const hp = conBonus + character.Class.HD + character.Race.HitPoints;
  form.getTextField('HPMax').setText(hp.toString());
  form.getTextField('HPCurrent').setText(hp.toString()); 
  const int = parseInt(character.Race.Modifiers.Intelligence + character.Stats.Intelligence);
  const intBonus = rule.getStatBonus(int);
  form.getTextField('INT').setText(int.toString());
  form.getTextField('INTmod').setText(intBonus.toString());
  const wis = parseInt(character.Race.Modifiers.Wisdom + character.Stats.Wisdom);
  const wisBonus = rule.getStatBonus(wis);
  form.getTextField('WIS').setText(wis.toString());
  form.getTextField('WISmod').setText(wisBonus.toString());
  const cha = parseInt(character.Race.Modifiers.Charisma + character.Stats.Charisma);
  const chaBonus = rule.getStatBonus(cha);
  form.getTextField('CHA').setText(cha.toString());
  form.getTextField('CHamod').setText(chaBonus.toString());
  /* Personality Thingies */
  const personality = character.Background.Personality[Math.floor(Math.random() * character.Background.Personality.length)];
  form.getTextField('PersonalityTraits ').setText(personality);
  form.getTextField('Ideals').setText(getIdeals(character));
  const bonds = character.Background.Bond[Math.floor(Math.random() * character.Background.Bond.length)];
  form.getTextField('Bonds').setText(bonds);
  const flaws = character.Background.Flaw[Math.floor(Math.random() * character.Background.Flaw.length)];
  form.getTextField('Flaws').setText(flaws);
  /* Proficiencies */
  const languages = character.Race.Languages.concat(character.Background.Languages).sort();
  let proficiencies = character.Race.Proficiencies;
  for (const cp of character.Class.Proficiencies) {
    if (!proficiencies.includes("cp")) {
      proficiencies.push(cp);
    }
  }
  for (const bp of character.Background.Proficiencies) {
    if (!proficiencies.includes("bp")) {
      proficiencies.push(bp);
    }
  }
  proficiencies = proficiencies.sort();
  const profs = "Languages: " + languages.join(', ') + "." + '\n\n' + "Proficiencies " + proficiencies.join(", ") + ".";
  form.getTextField('ProficienciesLang').setText(profs);
  /* Equipment */
  let gold = (dice.roll(character.Class.Money.Type, character.Class.Money.Dice) * character.Class.Money.Factor) + character.Background.Money;
  form.getTextField('GP').setText(gold.toString());
  const equipment = character.Class.Equipment.concat(character.Background.Equipment).sort()
  form.getTextField('Equipment').setText(equipment.join(", ") + ".");
  /* Features and Traits */
  const traits = character.Race.Abilities.concat(character.Class.Abilities).concat(character.Background.Abilities);
  let traitsText = "";
  for (let i = 0; i < traits.length; i++) {
    traitsText += traits[i].Name + ": " + traits[i].Description
    if (i !== traits.length -1) {
      traitsText += '\n\n';
    }
  }
  form.getTextField('Features and Traits').setText(traitsText);
  /* Armor Class */
  let ac = 10 + dexBonus;
  if (equipment.includes("Chain Mail")) {
    ac = 16;
  } else if (equipment.includes("Scale Mail")) {
    ac = 14 + (dexBonus > 2 ? 2 : dexBonus);
  } else if (equipment.includes("Leather Armor")) {
    ac = 11 + dexBonus
  } else if (character.Class.Name === "Monk") {
    ac += wisBonus;
  } else if (character.Class.Name === "Barbarian") {
    ac += conBonus;
  }
  if (equipment.includes("Shield")) {
    ac += 2;  
  }
  form.getTextField('AC').setText(ac.toString());
  /* Weapons */
  let primaryIsDagger = false;
  if (equipment.includes("Greataxe")) {
    form.getTextField('Wpn Name').setText("Greataxe");
  } else if (equipment.includes("Longsword")) {
    form.getTextField('Wpn Name').setText("Longsword");
  } else if (equipment.includes("Rapier")) {
    form.getTextField('Wpn Name').setText("Rapier");
  } else if (equipment.includes("Scimitar")) {
    form.getTextField('Wpn Name').setText("Scimitar");
  } else if (equipment.includes("Mace")) {
    form.getTextField('Wpn Name').setText("Mace");
  } else if (equipment.includes("Shortsword") || equipment.includes("2 Shortswords")) {
    form.getTextField('Wpn Name').setText("Shortsword");
  } else if (equipment.includes("Quarterstaff")) {
    form.getTextField('Wpn Name').setText("Quarterstaff");
  } else if (equipment.includes('Dagger') || equipment.includes('2 Daggers')) {
    primaryIsDagger = true;
    form.getTextField('Wpn Name').setText("Dagger");
  }
  if (equipment.includes("Longbow")) {
    form.getTextField('Wpn Name 2').setText("Longbow");
  } else if (equipment.includes("Light Crossbow")) {
    form.getTextField('Wpn Name 2').setText("Light Crossbow");
  } else if (equipment.includes("Shortbow")) {
    form.getTextField('Wpn Name 2').setText("Shortbow");
  } else if (equipment.includes("4 Javelins")) {
    form.getTextField('Wpn Name 2').setText("Thrown Javelin");
  } else if (equipment.includes("10 Darts")) {
    form.getTextField('Wpn Name 2').setText("Dart");
  } else if (equipment.includes('Dagger') || equipment.includes('2 Daggers')) {
    form.getTextField('Wpn Name 2').setText("Thrown Dagger");
  } 

  // form.getTextField('Wpn Name').setText(traitsText);
  // Wpn1 AtkBonus
  // Wpn1 Damage
  // Wpn Name 2

  /* Skills */
  let skills = character.Background.Skills;

  let raceSkills = character.Race.Skills.Count;

  while(raceSkills > 0) {
    const random = character.Race.Skills.List[Math.floor(Math.random() * character.Race.Skills.List.length)];

    if (!skills.includes(random)) {
      skills.push(random);
      raceSkills--;
    }
  }

  let classSkills = character.Class.Skills.Count;

  while(classSkills > 0) {
    const random = character.Class.Skills.List[Math.floor(Math.random() * character.Class.Skills.List.length)];

    if (!skills.includes(random)) {
      skills.push(random);
      classSkills--;
    }
  }
  
  skills = skills.sort();

  console.log(skills);
      
  const pdfBytes = await pdfDoc.save();

  var blob = new Blob([pdfBytes], { type: "application/pdf" });
  var urlCreator = window.URL || window.webkitURL;
  var imageUrl = urlCreator.createObjectURL(blob);
  // window.open(imageUrl);

  return imageUrl;

  // download(pdfBytes, character.Name + '.pdf', 'application/pdf');
}

function getIdeals(character) {

    let chosenOne = null;

    while (!chosenOne) {
        const random = character.Background.Ideal[Math.floor(Math.random() * character.Background.Ideal.length)];

        if (!random.Alignments || character.Alignment.includes(random.Alignments)) {
            chosenOne = random.Description;
        }
    }
    
    return chosenOne;
}