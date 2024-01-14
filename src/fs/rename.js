import * as fsPromises from 'fs/promises';
import fs from 'fs';

const wrongFile = './files/wrongFilename.txt';
const properFile = './files/properFilename.md';

const successMessage = `File '${
  wrongFile.split('/')[2]
}' was succesfully renamed to '${properFile.split('/')[2]}'`;

const rename = async () => {
  try {
    if (!fs.existsSync(wrongFile) || fs.existsSync(properFile)) {
      throw new Error('FS operation failed');
    }
    await fsPromises.rename(wrongFile, properFile);
    console.log(successMessage);
  } catch {
    throw new Error('FS operation failed');
  }
};

await rename();
