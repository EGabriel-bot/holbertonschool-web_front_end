function countPrimeNumbers () {

  let isPrime;
  let countPrimes = 0;

  for (let i = 2; i <= 100; i++) {
    isPrime = true;
    const end = Math.round(Math.sqrt(i));

    for (let mod = 2; mod <= end; mod++) {
      if (i % mod == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      countPrimes = countPrimes + 1;
    }
  }

  return countPrimes;
}

const startProcessTime = performance.now();
setTimeout(() => {
  for (let i = 0; i <= 100; i++){
    countPrimeNumbers();
  }
}, 0);
const endProcessTime = performance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${endProcessTime - startProcessTime} milliseconds.`);