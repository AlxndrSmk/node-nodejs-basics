import fs from 'fs/promises';

const sourceDir = './files';
const copyDir = './files_copy';

const successMessage = `Folder '${
  sourceDir.split('/')[1]
}' succesfully copied to '${copyDir.split('/')[1]}' folder`;

const copy = async () => {
  try {
    await fs.cp(sourceDir, copyDir, {
      force: false,
      recursive: true,
      errorOnExist: true,
    });
    console.log(successMessage);
  } catch {
    throw new Error('FS operation failed');
  }
};

await copy();
