import playGame from '../index.js';
import getRandomNumber from '../common-functions.js';

const isEven = (number) => number % 2 === 0;

const makePair = () => {
  const min = 1;
  const max = 100;
  const randomNumber = getRandomNumber(min, max);
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, answer];
};

const brainEven = () => {
  const testData = {
    rule: 'Answer "yes" if the number is even, otherwise answer "no".',
    makePair,
  };
  playGame(testData);
};

export default brainEven;
