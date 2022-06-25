import playGame from '../index.js';
import getRandomNumber from '../common-functions.js';

const findGcd = (num1, num2) => {
  if (num2 > num1) return findGcd(num2, num1);
  if (!num2) return num1;
  return findGcd(num2, num1 % num2);
};

const makePair = () => {
  const min = 1;
  const max = 100;
  const firstNumber = getRandomNumber(min, max);
  const secondNumber = getRandomNumber(min, max);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(findGcd(firstNumber, secondNumber));
  return [question, correctAnswer];
};

const brainEven = () => {
  const testData = {
    rule: 'Find the greatest common divisor of given numbers.',
    makePair,
  };
  playGame(testData);
};

export default brainEven;
