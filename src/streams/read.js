import fs from 'fs';

const read = async () => {
  const readableStream = fs.createReadStream('./files/fileToRead.txt');

  readableStream.on('data', (chunk) => {
    process.stdout.write(chunk);
  });

  readableStream.on('error', (error) => {
    console.error('Error reading file:', error);
  });
};

await read();
