import { parentPort } from 'worker_threads';

let n;

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  parentPort.on('message', (data) => {
    const messageParts = data.split(':');
    n = parseInt(messageParts[0]);

    try {
      const res = nthFibonacci(n);
      parentPort.postMessage({ status: 'resolved', data: res });
    } catch (err) {
      parentPort.postMessage({ status: 'error', data: null });
    }
  });
};

sendResult();
