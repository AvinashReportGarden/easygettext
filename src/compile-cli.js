#!/usr/bin/env node

/* eslint no-console:0 */

const fs = require('fs');
const path = require('path');
const compile = require('./compile.js');
const utils = require('./utils.js');
const minimist = require('minimist');


// Process arguments
const argv = minimist(process.argv.slice(2));
const files = argv._.sort() || [];
const outputFile = argv.outputFile || null;
const outputDir = argv.outputDir || null;

if (!files) {
  console.log('Usage:\n\tcompile [--outputFile OUTFILE] | [--outputDir OUTDIR] <FILES>');
  process.exit(1);
}

// Compile strings
const translationData = {};

for (let file of files) {
  console.log('[gettext] processing PO file:', file);
  try {
    const poContents = fs.readFileSync(file, {encoding: 'utf-8'}).toString();
    const data = compile.po2json(poContents);
    const lang = data.headers.Language;
    if (!translationData[lang]) {
      translationData[lang] = data.messages;
    } else {
      Object.assign(translationData[data.headers.Language], data.messages);
    }
  } catch (e) {
    console.error('[gettext] could not read:', file);
    console.trace(e);
    process.exit(1);
  }
}

// Output results
if (outputFile) {
    fs.writeFileSync(outputFile, utils.jsonPretty(translationData));
} else if (outputDir) {
    Object.keys(translationData).forEach(lang => {
      fs.writeFileSync(path.join(outputDir, `${lang}.json`), utils.jsonPretty(translationData[lang]));
    })
} else {
  console.log(utils.jsonPretty(translationData));
}
