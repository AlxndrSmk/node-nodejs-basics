const parseArgs = () => {
  if (process.argv.length === 2) {
    console.error('Expected at least one argument!');
    process.exit(1);
  }

  const args = process.argv.slice(2);

  args.map((el, i) => {
    if (el.startsWith('--')) console.log(`${el.slice(2)} is ${args[i + 1]}`);
  });
};

parseArgs();
