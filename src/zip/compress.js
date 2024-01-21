import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { promisify } from 'node:util';

const pipe = promisify(pipeline);

const compress = async () => {
  const source = createReadStream('./files/fileToCompress.txt');
  const destination = createWriteStream('./files/archive.gz');

  try {
    const gzip = createGzip();
    await pipe(source, gzip, destination);

    console.log('File compressed successfully.');
  } catch (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }
};

await compress();
