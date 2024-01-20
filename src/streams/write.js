import { createWriteStream } from 'fs';

const pathtToWrite = './files/fileToWrite.txt';

export const write = async () => {
  const streamFileToWrite = createWriteStream(pathtToWrite);

  console.log('Enter text:');

  process.stdin.on('data', (data) => {
    streamFileToWrite.write(data.toString());

    console.log(
      `Entered text was successfully written into '${
        pathtToWrite.split('/')[2]
      }' file.`
    );

    process.exit();
  });
};

write();
