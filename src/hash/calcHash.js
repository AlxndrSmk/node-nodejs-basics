import fs from 'node:fs';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
  fs.readFile('./files/fileToCalculateHashFor.txt', 'utf8', (err, data) => {
    if (err) {
      throw new Error('FS operation failed');
    }
    console.log(createHash('sha256').update(data).digest('hex'));
  });
};

await calculateHash();
