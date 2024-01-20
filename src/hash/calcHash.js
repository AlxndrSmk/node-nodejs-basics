import { readFile } from 'fs/promises';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
  const fileStream = await readFile(
    './files/fileToCalculateHashFor.txt',
    'utf8',
    (err, data) => {
      if (err) {
        throw new Error('FS operation failed');
      }
      return data;
    }
  );

  console.log(createHash('sha256').update(fileStream).digest('hex'));
};

await calculateHash();
