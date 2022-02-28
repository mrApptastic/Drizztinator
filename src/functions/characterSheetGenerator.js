import { Ib } from '../assets/characterSheet.js';
import * as rule from './rules.js';
import * as dice from './diceHelper.js';

import { PDFDocument } from 'pdf-lib';

export async function downloadCharacter(character) {
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
  form.getField('ProfBonus').setText(formatBonus(2));
  form.getField('Background').setText(character.Background.Name);
  form.getField('Speed').setText(character.Race.Speed + " ft.");
    /* Stats N' Stuff */
  const str = parseInt(character.Race.Modifiers.Strength + character.Stats.Strength);
  const strBonus = rule.getStatBonus(str);
  form.getTextField('STR').setText(str.toString());
  form.getTextField('STRmod').setText(formatBonus(strBonus));
  const dex = parseInt(character.Race.Modifiers.Dexterity + character.Stats.Dexterity);
  const dexBonus = rule.getStatBonus(dex);
  form.getTextField('DEX').setText(dex.toString());
  form.getTextField('DEXmod ').setText(formatBonus(dexBonus));
  form.getTextField('Initiative').setText(formatBonus(dexBonus));
  const con = parseInt(character.Race.Modifiers.Constitution + character.Stats.Constitution);
  const conBonus = rule.getStatBonus(con);
  form.getTextField('CON').setText(con.toString());
  form.getTextField('CONmod').setText(formatBonus(conBonus));
  const hp = conBonus + character.Class.HD + character.Race.HitPoints;
  form.getTextField('HPMax').setText(hp.toString());
  form.getTextField('HPCurrent').setText(hp.toString()); 
  const int = parseInt(character.Race.Modifiers.Intelligence + character.Stats.Intelligence);
  const intBonus = rule.getStatBonus(int);
  form.getTextField('INT').setText(int.toString());
  form.getTextField('INTmod').setText(formatBonus(intBonus));
  const wis = parseInt(character.Race.Modifiers.Wisdom + character.Stats.Wisdom);
  const wisBonus = rule.getStatBonus(wis);
  form.getTextField('WIS').setText(wis.toString());
  form.getTextField('WISmod').setText(formatBonus(wisBonus));
  const cha = parseInt(character.Race.Modifiers.Charisma + character.Stats.Charisma);
  const chaBonus = rule.getStatBonus(cha);
  form.getTextField('CHA').setText(cha.toString());
  form.getTextField('CHamod').setText(formatBonus(chaBonus));
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
  const profs = "Languages: " + languages.join(', ') + "." + '\n\n' + "Proficiencies: " + proficiencies.join(", ") + ".";
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
  const finesse = strBonus > dexBonus ? strBonus : dexBonus;
  let primaryIsDagger = false;
  if (equipment.includes("Greataxe")) {
    form.getTextField('Wpn Name').setText("Greataxe");
    form.getTextField('Wpn1 AtkBonus').setText(formatBonus(strBonus + 2));
    form.getTextField('Wpn1 Damage').setText("1d12 " + formatBonus(strBonus) + " slashing");
  } else if (equipment.includes("Longsword")) {
    form.getTextField('Wpn Name').setText("Longsword");
    form.getTextField('Wpn1 AtkBonus').setText(formatBonus(strBonus + 2));
    form.getTextField('Wpn1 Damage').setText("1d8 " + formatBonus(strBonus) + " slashing");
  } else if (equipment.includes("Rapier")) {
    form.getTextField('Wpn Name').setText("Rapier");
    form.getTextField('Wpn1 AtkBonus').setText(formatBonus(finesse + 2));
    form.getTextField('Wpn1 Damage').setText("1d8 " + formatBonus(finesse) + " piercing");
  } else if (equipment.includes("Scimitar")) {
    form.getTextField('Wpn Name').setText("Scimitar");
    form.getTextField('Wpn1 AtkBonus').setText(formatBonus(finesse + 2));
    form.getTextField('Wpn1 Damage').setText("1d6 " + formatBonus(finesse) + " slashing");
  } else if (equipment.includes("Mace")) {
    form.getTextField('Wpn Name').setText("Mace");
    form.getTextField('Wpn1 AtkBonus').setText(formatBonus(strBonus + 2));
    form.getTextField('Wpn1 Damage').setText("1d6 " + formatBonus(strBonus) + " bludgeoning");
  } else if (equipment.includes("Shortsword") || equipment.includes("2 Shortswords")) {
    form.getTextField('Wpn Name').setText("Shortsword");
    form.getTextField('Wpn1 AtkBonus').setText(formatBonus(finesse + 2));
    form.getTextField('Wpn1 Damage').setText("1d6 " + formatBonus(finesse) + " piercing");
  } else if (equipment.includes("Quarterstaff")) {
    form.getTextField('Wpn Name').setText("Quarterstaff");
    form.getTextField('Wpn1 AtkBonus').setText(formatBonus(strBonus + 2));
    form.getTextField('Wpn1 Damage').setText("1d8 " + formatBonus(strBonus) + " bludgeoning");
  } else if (equipment.includes('Dagger') || equipment.includes('2 Daggers')) {
    primaryIsDagger = true;
    form.getTextField('Wpn Name').setText("Dagger");
    form.getTextField('Wpn1 AtkBonus').setText(formatBonus(finesse + 2));
    form.getTextField('Wpn1 Damage').setText("1d4 " + formatBonus(finesse) + " piercing");
  }
  if (equipment.includes("Longbow")) {
    form.getTextField('Wpn Name 2').setText("Longbow*");
    form.getTextField('Wpn2 AtkBonus ').setText(formatBonus(dexBonus + 2));
    form.getTextField('Wpn2 Damage ').setText("1d8 " + formatBonus(dexBonus) + " slashing");
    form.getTextField('AttacksSpellcasting').setText("*You can shoot your longbow 150 feet, or up to 600 feet with disadvantage on the attack roll.");
  } else if (equipment.includes("Light Crossbow")) {
    form.getTextField('Wpn Name 2').setText("Light Crossbow*");
    form.getTextField('Wpn2 AtkBonus ').setText(formatBonus(dexBonus + 2));
    form.getTextField('Wpn2 Damage ').setText("1d8 " + formatBonus(dexBonus) + " piercing");
    form.getTextField('AttacksSpellcasting').setText("*You can shoot your light crossbow 80 feet, or up to 320 feet with disadvantage on the attack roll.");
  } else if (equipment.includes("Shortbow")) {
    form.getTextField('Wpn Name 2').setText("Shortbow*");
    form.getTextField('Wpn2 AtkBonus ').setText(formatBonus(dexBonus + 2));
    form.getTextField('Wpn2 Damage ').setText("1d6 " + formatBonus(dexBonus) + " piercing");
    form.getTextField('AttacksSpellcasting').setText("*You can shoot your shortbow 80 feet, or up to 320 feet with disadvantage on the attack roll.");
  } else if (equipment.includes("4 Javelins")) {
    form.getTextField('Wpn Name 2').setText("Thrown Javelin*");
    form.getTextField('Wpn2 AtkBonus ').setText(formatBonus(strBonus + 2));
    form.getTextField('Wpn2 Damage ').setText("1d6 " + formatBonus(strBonus) + " piercing");
    form.getTextField('AttacksSpellcasting').setText("*You can throw a javelin 30 feet, or up to 120 feet with disadvantage on the attack roll.");
  } else if (equipment.includes("10 Darts")) {
    form.getTextField('Wpn Name 2').setText("Dart*");
    form.getTextField('Wpn2 AtkBonus ').setText(formatBonus(finesse + 2));
    form.getTextField('Wpn2 Damage ').setText("1d4 " + formatBonus(finesse) + " piercing");
    form.getTextField('AttacksSpellcasting').setText("*You can throw a dart 20 feet, or up to 60 feet with disadvantage on the attack roll.");
  } else if (equipment.includes('Dagger') || equipment.includes('2 Daggers')) {
    form.getTextField('Wpn Name 2').setText("Thrown Dagger*");
    form.getTextField('Wpn2 AtkBonus ').setText(formatBonus(finesse + 2));
    form.getTextField('Wpn2 Damage ').setText("1d4 " + formatBonus(finesse) + " piercing");
    form.getTextField('AttacksSpellcasting').setText("*You can throw a dagger 20 feet, or up to 60 feet with disadvantage on the attack roll.");
  } 
  if (equipment.includes("2 Handaxes")) {
    form.getTextField('Wpn Name 3').setText("Handaxe");
    form.getTextField('Wpn3 AtkBonus  ').setText(formatBonus(strBonus + 2));
    form.getTextField('Wpn3 Damage ').setText("1d6 " + formatBonus(strBonus) + " slashing");
  } else if (!primaryIsDagger && (equipment.includes('Dagger') || equipment.includes('2 Daggers'))) {
    form.getTextField('Wpn Name 3').setText("Dagger");
    form.getTextField('Wpn3 AtkBonus  ').setText(formatBonus(finesse + 2));
    form.getTextField('Wpn3 Damage ').setText("1d4 " + formatBonus(finesse) + " piercing");
  } else if (character.Class.Name === "Monk") {
    form.getTextField('Wpn Name 3').setText("Unarmed");
    form.getTextField('Wpn3 AtkBonus  ').setText(formatBonus(finesse + 2));
    form.getTextField('Wpn3 Damage ').setText("1d4 " + formatBonus(finesse) + " bludgeoning");
  }
  /* Saves */
  if (character.Class.Saves.Strength) {    
    form.getCheckBox('Check Box 11').check();
    form.getTextField('ST Strength').setText(formatBonus(strBonus + 2).toString());    
  } else {
    form.getTextField('ST Strength').setText(formatBonus(strBonus).toString());
  }
  if (character.Class.Saves.Dexterity) {    
    form.getCheckBox('Check Box 18').check();
    form.getTextField('ST Dexterity').setText(formatBonus(dexBonus + 2).toString());    
  } else {
    form.getTextField('ST Dexterity').setText(formatBonus(dexBonus).toString());
  }
  if (character.Class.Saves.Constitution) {    
    form.getCheckBox('Check Box 19').check();
    form.getTextField('ST Constitution').setText(formatBonus(conBonus + 2).toString());    
  } else {
    form.getTextField('ST Constitution').setText(formatBonus(conBonus).toString());
  }
  if (character.Class.Saves.Intelligence) {    
    form.getCheckBox('Check Box 20').check();
    form.getTextField('ST Intelligence').setText(formatBonus(intBonus + 2).toString());    
  } else {
    form.getTextField('ST Intelligence').setText(formatBonus(intBonus).toString());
  }
  if (character.Class.Saves.Wisdom) {    
    form.getCheckBox('Check Box 21').check();
    form.getTextField('ST Wisdom').setText(formatBonus(wisBonus + 2).toString());    
  } else {
    form.getTextField('ST Wisdom').setText(formatBonus(wisBonus).toString());
  }
  if (character.Class.Saves.Charisma) {    
    form.getCheckBox('Check Box 22').check();
    form.getTextField('ST Charisma').setText(formatBonus(chaBonus + 2).toString());    
  } else {
    form.getTextField('ST Charisma').setText(formatBonus(chaBonus).toString());
  }
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
  let expertiseSkills = [];
  if (character.Class.Name === "Rogue") {
    while(expertiseSkills.length < 2) {
      const random = skills[Math.floor(Math.random() * skills.length)];  
      if (!expertiseSkills.includes(random)) {
        expertiseSkills.push(random);
      }
    }
  }
  if (skills.includes("Acrobatics")) {    
    const bonus = expertiseSkills.includes("Acrobatics") ? 4 : 2;
    form.getCheckBox('Check Box 23').check();
    form.getTextField('Acrobatics').setText(formatBonus(dexBonus + bonus).toString());    
  } else {
    form.getTextField('Acrobatics').setText(formatBonus(dexBonus.toString()));
  }
  if (skills.includes("Animal Handling")) {    
    const bonus = expertiseSkills.includes("Animal Handling") ? 4 : 2;
    form.getCheckBox('Check Box 24').check();
    form.getTextField('Animal').setText(formatBonus(wisBonus + bonus).toString());    
  } else {
    form.getTextField('Animal').setText(formatBonus(wisBonus.toString()));
  }
  if (skills.includes("Arcana")) {    
    const bonus = expertiseSkills.includes("Arcana") ? 4 : 2;
    form.getCheckBox('Check Box 25').check();
    form.getTextField('Arcana').setText(formatBonus(intBonus + bonus).toString());    
  } else {
    form.getTextField('Arcana').setText(formatBonus(intBonus.toString()));
  }
  if (skills.includes("Athletics")) {   
    const bonus = expertiseSkills.includes("Athletics") ? 4 : 2; 
    form.getCheckBox('Check Box 26').check();
    form.getTextField('Athletics').setText(formatBonus(strBonus + bonus).toString());    
  } else {
    form.getTextField('Athletics').setText(formatBonus(strBonus.toString()));
  }
  if (skills.includes("Deception")) {    
    const bonus = expertiseSkills.includes("Deception") ? 4 : 2;
    form.getCheckBox('Check Box 27').check();
    form.getTextField('Deception ').setText(formatBonus(chaBonus + bonus).toString());    
  } else {
    form.getTextField('Deception ').setText(formatBonus(chaBonus.toString()));
  }
  if (skills.includes("History")) {    
    const bonus = expertiseSkills.includes("History") ? 4 : 2;
    form.getCheckBox('Check Box 28').check();
    form.getTextField('History ').setText(formatBonus(intBonus + bonus).toString());    
  } else {
    form.getTextField('History ').setText(formatBonus(intBonus.toString()));
  }
  if (skills.includes("Insight")) {
    const bonus = expertiseSkills.includes("Insight") ? 4 : 2;    
    form.getCheckBox('Check Box 29').check();
    form.getTextField('Insight').setText(formatBonus(wisBonus + bonus).toString());    
  } else {
    form.getTextField('Insight').setText(formatBonus(wisBonus.toString()));
  }
  if (skills.includes("Intimidation")) {
    const bonus = expertiseSkills.includes("Intimidation") ? 4 : 2;    
    form.getCheckBox('Check Box 30').check();
    form.getTextField('Intimidation').setText(formatBonus(chaBonus + bonus).toString());    
  } else {
    form.getTextField('Intimidation').setText(formatBonus(chaBonus.toString()));
  }
  if (skills.includes("Investigation")) {
    const bonus = expertiseSkills.includes("Investigation") ? 4 : 2;    
    form.getCheckBox('Check Box 31').check();
    form.getTextField('Investigation ').setText(formatBonus(intBonus + bonus).toString());    
  } else {
    form.getTextField('Investigation ').setText(formatBonus(intBonus.toString()));
  }
  if (skills.includes("Medicine")) { 
    const bonus = expertiseSkills.includes("Medicine") ? 4 : 2;   
    form.getCheckBox('Check Box 32').check();
    form.getTextField('Medicine').setText(formatBonus(wisBonus + bonus).toString());    
  } else {
    form.getTextField('Medicine').setText(formatBonus(wisBonus.toString()));
  }
  if (skills.includes("Nature")) {
    const bonus = expertiseSkills.includes("Nature") ? 4 : 2;   
    form.getCheckBox('Check Box 33').check();
    form.getTextField('Nature').setText(formatBonus(intBonus + bonus).toString());    
  } else {
    form.getTextField('Nature').setText(formatBonus(intBonus.toString()));
  }
  if (skills.includes("Perception")) {    
    const bonus = expertiseSkills.includes("Perception") ? 4 : 2;
    form.getCheckBox('Check Box 34').check();
    form.getTextField('Perception ').setText(formatBonus(wisBonus + bonus).toString());    
  } else {
    form.getTextField('Perception ').setText(formatBonus(wisBonus.toString()));
  }
  if (skills.includes("Performance")) {    
    const bonus = expertiseSkills.includes("Performance") ? 4 : 2;
    form.getCheckBox('Check Box 35').check();
    form.getTextField('Performance').setText(formatBonus(wisBonus + bonus).toString());    
  } else {
    form.getTextField('Performance').setText(formatBonus(wisBonus).toString());
  }
  if (skills.includes("Persuasion")) {   
    const bonus = expertiseSkills.includes("Persuasion") ? 4 : 2; 
    form.getCheckBox('Check Box 36').check();
    form.getTextField('Persuasion').setText(formatBonus(chaBonus + bonus).toString());    
  } else {
    form.getTextField('Persuasion').setText(formatBonus(chaBonus).toString());
  }
  if (skills.includes("Religion")) {  
    const bonus = expertiseSkills.includes("Religion") ? 4 : 2;  
    form.getCheckBox('Check Box 37').check();
    form.getTextField('Religion').setText(formatBonus(wisBonus + bonus).toString());    
  } else {
    form.getTextField('Religion').setText(formatBonus(wisBonus).toString());
  }
  if (skills.includes("Sleight of Hand")) {  
    const bonus = expertiseSkills.includes("Sleight of Hand") ? 4 : 2;  
    form.getCheckBox('Check Box 38').check();
    form.getTextField('SleightofHand').setText(formatBonus(dexBonus + bonus).toString());    
  } else {
    form.getTextField('SleightofHand').setText(formatBonus(dexBonus).toString());
  }
  if (skills.includes("Stealth")) {    
    const bonus = expertiseSkills.includes("Stealth") ? 4 : 2;
    form.getCheckBox('Check Box 39').check();
    form.getTextField('Stealth ').setText(formatBonus(dexBonus + bonus).toString());    
  } else {
    form.getTextField('Stealth ').setText(formatBonus(dexBonus).toString());
  }
  if (skills.includes("Survival")) {    
    const bonus = expertiseSkills.includes("Survival") ? 4 : 2;
    form.getCheckBox('Check Box 40').check();
    form.getTextField('Survival').setText(formatBonus(wisBonus + bonus).toString());    
  } else {
    form.getTextField('Survival').setText(formatBonus(wisBonus).toString());
  }
  /* Passive Wisdom */
  let passiveWisdom = 10 + wisBonus;
  if (character.Class.Saves.Wisdom) {
    passiveWisdom += 2;
  }
  form.getTextField('Passive').setText((passiveWisdom).toString());
  /* Hit Dice */
  form.getTextField('HDTotal').setText("1d" + character.Class.HD);
  /* Appearance */
  const age = Math.round(character.Race.Appearance.Age * (1 + ((dice.roll(100)) / 100)));  
  form.getTextField('Age').setText(age.toString());
  const inches = Math.round(character.Race.Appearance.Height * (0.8 + ((dice.roll(40)) / 100)));
  const feet = Math.floor(inches / 12);
  const remainingInches = feet % 12;
  const height = feet + "'" + remainingInches + "''"; 
  form.getTextField('Height').setText(inches.toString());
  const weight = Math.round(character.Race.Appearance.Weight * (0.7 + ((dice.roll(60)) / 100)));
  form.getTextField('Weight').setText(weight.toString() + " lbs.");
  const eyes = character.Race.Appearance.Eyes[Math.floor(Math.random() * character.Race.Appearance.Eyes.length)];
  form.getTextField('Eyes').setText(eyes);
  const skin = character.Race.Appearance.Skin[Math.floor(Math.random() * character.Race.Appearance.Skin.length)];
  form.getTextField('Skin').setText(skin);
  const hair = character.Race.Appearance.Hair[Math.floor(Math.random() * character.Race.Appearance.Hair.length)];
  form.getTextField('Hair').setText(hair);
  /* Finished PDF */
  const pdfBytes = await pdfDoc.save();
  var blob = new Blob([pdfBytes], { type: "application/pdf" });
  var urlCreator = window.URL || window.webkitURL;
  var imageUrl = urlCreator.createObjectURL(blob);

  return imageUrl;
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

function formatBonus(value) {
  if (value > 0) {
    return "+" + value.toString();
  } else {
    return value.toString();
  }
}