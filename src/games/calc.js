import playGame from '../index.js';
import getRandomNumber from '../common-functions.js';

const getRandomSign = () => {
  const signs = ['+', '-', '*'];
  const firstIndexOfSigns = 0;
  const lastIndexOfSigns = 2;
  const randomIndexOfSign = getRandomNumber(firstIndexOfSigns, lastIndexOfSigns);
  return signs[randomIndexOfSign];
};

const getAnswer = (firstNumber, secondNumber, sign) => {
  let answer;

  switch (sign) {
    case '+':
      answer = firstNumber + secondNumber;
      break;
    case '-':
      answer = firstNumber - secondNumber;
      break;
    case '*':
      answer = firstNumber * secondNumber;
      break;
    default:
      console.log('Error');
  }
  return String(answer);
};

const makePair = () => {
  const randomSign = getRandomSign();
  const minNumber = 0;
  const maxNumber = 100;
  const firstNumber = getRandomNumber(minNumber, maxNumber);
  const secondNumber = getRandomNumber(minNumber, maxNumber);
  const question = `${firstNumber} ${randomSign} ${secondNumber}`;
  const answer = getAnswer(firstNumber, secondNumber, randomSign);
  return [question, answer];
};

const brainCalc = () => {
  const testData = {
    rule: 'What is the result of the expression?',
    makePair,
  };
  playGame(testData);
};

export default brainCalc;
