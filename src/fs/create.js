import fs from 'fs/promises';

const content = 'I am fresh and young';
const baseBath = './files';
const fileName = 'fresh.txt';

const create = async () => {
  try {
    await fs.writeFile(`${baseBath}/${fileName}`, content, { flag: 'wx' });
    console.log(`File '${fileName}' created!`);
  } catch {
    throw new Error('FS operation failed');
  }
};

await create();
