import playGame from '../index.js';
import getRandomNumber from '../common-functions.js';

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const makePair = () => {
  const number = getRandomNumber();
  const question = `Question: ${number}`;
  const answer = isPrime(number) ? 'yes' : 'no';
  return [question, answer];
};

const brainPrime = () => {
  const testData = {
    rule: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    makePair,
  };
  playGame(testData);
};

export default brainPrime;
