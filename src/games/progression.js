import playGame from '../index.js';
import { getRandomNumber } from '../common-functions.js';

const getProgressionLength = () => {
  const minLength = 5;
  const maxLength = 10;
  return getRandomNumber(minLength, maxLength);
};

const getMissedPosition = (maxLength) => {
  const minPosition = 0;
  const maxPosition = maxLength - 1;
  return getRandomNumber(minPosition, maxPosition);
};

const getProgressionStep = () => {
  const minStep = 2;
  const maxStep = 10;
  return getRandomNumber(minStep, maxStep);
};

const getFirstElem = () => {
  const minFirstElem = 0;
  const maxFirstElem = 10;
  return getRandomNumber(minFirstElem, maxFirstElem);
};

const getProgression = (firstElem, step, length) => {
  const progression = new Array(length);
  progression.fill(firstElem);
  return progression.map((elem, index) => elem + index * step);
};

const getQuestion = (progression, missedPosition) => {
  const copyProgression = [...progression];
  copyProgression[missedPosition] = '..';
  return copyProgression.join(' ');
};

const makePair = () => {
  const progressionLength = getProgressionLength();
  const missedPosition = getMissedPosition(progressionLength);
  const progressionStep = getProgressionStep();
  const firstElem = getFirstElem();
  const progression = getProgression(firstElem, progressionStep, progressionLength);
  const question = getQuestion(progression, missedPosition);
  const answer = String(progression[missedPosition]);
  return [question, answer];
};

const brainProgression = () => {
  const testData = {
    rule: 'What number is missing in the progression?',
    makePair,
  };
  playGame(testData);
};

export default brainProgression;
