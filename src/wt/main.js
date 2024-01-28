import { Worker } from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
  const numWorkers = os.cpus().length;
  const workers = [];
  const results = [];

  for (let i = 0; i < numWorkers; i += 1) {
    const worker = new Worker('./worker.js');
    workers.push(worker);

    worker.on('message', (result) => {
      results.push(result);

      if (results.length === numWorkers) {
        results.sort((a, b) => (a.data < b.data ? -1 : 1));
        console.log(results);
        workers.forEach((worker) => worker.terminate());
      }
    });

    worker.on('error', (error) => {
      console.error('Worker error:', error);
    });

    // worker.postMessage(i + 10);
    worker.postMessage(`${i + 10}:${i}`); // Send data and wor
  }
};

await performCalculations();
