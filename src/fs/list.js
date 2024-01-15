import fs from 'fs';

const list = async () => {
  const res = [];

  fs.readdir('./files', (err, files) => {
    if (err) {
      throw new Error('FS operation failed');
    }
    files.forEach((file) => {
      res.push(file);
    });
    console.log(res);
  });
};

await list();
