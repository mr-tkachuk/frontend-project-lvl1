import playGame from '../index.js';
import { getRandomNumber } from '../common-functions.js';

const makePair = () => {
  const signs = ['+', '-', '*'];
  const minNumber = 0;
  const maxNumber = 100;
  const firstIndexOfSigns = 0;
  const lastIndexOfSigns = 2;
  const randomIndexOfSign = getRandomNumber(firstIndexOfSigns, lastIndexOfSigns);
  const randomSign = signs[randomIndexOfSign];
  const firstNumber = getRandomNumber(minNumber, maxNumber);
  const secondNumber = getRandomNumber(minNumber, maxNumber);

  const question = `${firstNumber} ${randomSign} ${secondNumber}`;

  let correctAnswer;

  switch (randomSign) {
    case '+':
      correctAnswer = firstNumber + secondNumber;
      break;
    case '-':
      correctAnswer = firstNumber - secondNumber;
      break;
    case '*':
      correctAnswer = firstNumber * secondNumber;
      break;
    default:
      console.log('Error');
  }
  return [question, String(correctAnswer)];
};

const brainCalc = () => {
  const testData = {
    rule: 'What is the result of the expression?',
    makePair,
  };
  playGame(testData);
};

export default brainCalc;
