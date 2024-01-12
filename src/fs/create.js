const fs = require('fs');

const create = async () => {
  const content = 'I am fresh and young';
  const baseBath = './files';
  const fileName = 'fresh.txt';
  const alreadyExists = fs.existsSync(`${baseBath}/${fileName}`);

  if (!alreadyExists) {
    fs.writeFile(`${baseBath}/${fileName}`, content, (err) => {
      if (err) throw err;
    });
    console.log(`File '${fileName}' created!`);
  } else {
    throw Error('FS operation failed');
  }
};

create();
