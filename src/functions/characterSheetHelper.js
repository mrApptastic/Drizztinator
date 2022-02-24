import { Ib } from '../assets/characterSheet.js';
import * as charGen from '../functions/characterGenerator.js';
import * as rule from '../functions/rules.js';

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

  form.getTextField('CharacterName').setText(character.Name);
  form.getTextField('CharacterName 2').setText(character.Name);
  form.getTextField('Race ').setText(character.Race.Name);
  form.getTextField('ClassLevel').setText(character.Class.Name);
  form.getField('Alignment').setText(character.Alignment);
  const str = parseInt(character.Race.Modifiers.Strength + character.Stats.Strength);
  form.getTextField('STR').setText(str.toString());
  form.getTextField('STRmod').setText( rule.getStatBonus(str).toString());
  const dex = parseInt(character.Race.Modifiers.Dexterity + character.Stats.Dexterity);
  form.getTextField('DEX').setText(dex.toString());
  form.getTextField('DEXmod ').setText(rule.getStatBonus(dex).toString());
  const con = parseInt(character.Race.Modifiers.Constitution + character.Stats.Constitution);
  form.getTextField('CON').setText(con.toString());
  form.getTextField('CONmod').setText(rule.getStatBonus(con).toString());
  const hp = rule.getStatBonus(con) + character.Class.HD + character.Race.HitPoints;
  form.getTextField('HPMax').setText(hp.toString());
  form.getTextField('HPCurrent').setText(hp.toString()); 
  const int = parseInt(character.Race.Modifiers.Intelligence + character.Stats.Intelligence);
  form.getTextField('INT').setText(int.toString());
  form.getTextField('INTmod').setText(rule.getStatBonus(int).toString());
  const wis = parseInt(character.Race.Modifiers.Wisdom + character.Stats.Wisdom);
  form.getTextField('WIS').setText(wis.toString());
  form.getTextField('WISmod').setText(rule.getStatBonus(wis).toString());
  const cha = parseInt(character.Race.Modifiers.Charisma + character.Stats.Charisma);
  form.getTextField('CHA').setText(cha.toString());
  form.getTextField('CHamod').setText(rule.getStatBonus(cha).toString());

  const pdfBytes = await pdfDoc.save();

  var blob = new Blob([pdfBytes], { type: "application/pdf" });
  var urlCreator = window.URL || window.webkitURL;
  var imageUrl = urlCreator.createObjectURL(blob);
  // window.open(imageUrl);

  return imageUrl;

  // download(pdfBytes, character.Name + '.pdf', 'application/pdf');
}