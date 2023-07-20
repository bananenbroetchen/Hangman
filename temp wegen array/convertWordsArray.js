const fs = require('fs');

function readFileContent(fileContent) {
  const wordArray = fileContent.split('\n').map(word => {
    return word.trim();
  });
  return wordArray.filter(word => word !== ''); // Filtere leere Wörter aus
}

const filePath = 'wortliste.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Fehler beim Lesen der Datei:', err);
    return;
  }

  const wordsArray = readFileContent(data);

  // Datei speichern
  const outputFilePath = 'wordsArray.js';
  const outputData = `const wordsArray = ${JSON.stringify(wordsArray)};\nmodule.exports = wordsArray;`;

  fs.writeFile(outputFilePath, outputData, 'utf8', err => {
    if (err) {
      console.error('Fehler beim Schreiben der Datei:', err);
      return;
    }

    console.log('Die Wörter wurden erfolgreich in wordsArray.js gespeichert!');
  });
});
