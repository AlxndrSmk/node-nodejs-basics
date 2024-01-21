import fs from 'fs';
import zlib from 'zlib';

const decompress = async () => {
  try {
    fs.createReadStream('./files/archive.gz')
      .pipe(zlib.createGunzip())
      .pipe(fs.createWriteStream('./files/fileToCompress.txt'));

    console.log('File decompressed.');
  } catch (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }
};

await decompress();
