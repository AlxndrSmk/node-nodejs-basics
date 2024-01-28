import { fork } from 'child_process';

const spawnChildProcess = async (args) => {
  fork(`./files/script.js`, args);
};

spawnChildProcess(['Hello', 'world', '!']);
