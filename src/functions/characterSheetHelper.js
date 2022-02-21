import { Ib } from '../assets/characterSheet.js';
import * as charGen from '../functions/characterGenerator.js';

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
  form.getTextField('STR').setText((character.Race.Modifiers.Strength + character.Stats.Strength).toString());
  form.getTextField('DEX').setText((character.Race.Modifiers.Dexterity + character.Stats.Dexterity).toString());
  form.getTextField('CON').setText((character.Race.Modifiers.Constitution + character.Stats.Constitution).toString());
  form.getTextField('INT').setText((character.Race.Modifiers.Intelligence + character.Stats.Intelligence).toString());
  form.getTextField('WIS').setText((character.Race.Modifiers.Wisdom + character.Stats.Wisdom).toString());
  form.getTextField('CHA').setText((character.Race.Modifiers.Wisdom + character.Stats.Wisdom).toString());

  const pdfBytes = await pdfDoc.save();

  var blob = new Blob([pdfBytes], { type: "application/pdf" });
  var urlCreator = window.URL || window.webkitURL;
  var imageUrl = urlCreator.createObjectURL(blob);
  window.open(imageUrl);

  return imageUrl;

  // download(pdfBytes, character.Name + '.pdf', 'application/pdf');
}