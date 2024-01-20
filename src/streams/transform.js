import { Transform } from 'stream';
import { EOL } from 'os';

const transform = async () => {
  const reverseText = new Transform({
    transform(chunk, encoding, callback) {
      this.push(
        chunk.toString().replace(EOL, '').split('').reverse().join('') + '\n'
      );
      callback();
    },
  });

  process.stdin.pipe(reverseText).pipe(process.stdout);
};

await transform();
