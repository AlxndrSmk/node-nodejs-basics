import fs from 'fs';

const fileToDelete = './files/fileToRemove.txt';
const successMessage = `File '${
  fileToDelete.split('/')[2]
}' was successfully deleted.`;

const remove = async () => {
  try {
    fs.unlink(fileToDelete, (err) => {
      if (err) {
        throw new Error('FS operation failed');
      }
      console.log(successMessage);
    });
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();
