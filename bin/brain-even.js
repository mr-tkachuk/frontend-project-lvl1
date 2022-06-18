import readlineSync from 'readline-sync';
import askUserName from '../src/cli.js';

function getRandom() {
  return Math.floor(Math.random() * 100);
}

function askQuestion(number) {
  console.log(`Question: ${number}`);
}

function readAnswer() {
  const answer = readlineSync.question('Your answer: ');
  return answer;
}
function checkAnswer(number, answer) {
  const correctAnswer = number % 2 ? 'no' : 'yes';
  let result = true;
  if (answer === correctAnswer) {
    console.log('Correct!');
  }

  if (answer !== correctAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    result = false;
  }
  return result;
}

function playRound() {
  const newNumber = getRandom();
  askQuestion(newNumber);
  const answer = readAnswer();
  const result = checkAnswer(newNumber, answer);
  return result;
}

console.log('Welcome to the Brain Games!');

const userName = askUserName();
let scoreCount = 0;
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  if (!playRound()) {
    console.log(`Let's try again, ${userName}!`);
    break;
  }
  scoreCount += 1;
}

if (scoreCount === 3) {
  console.log(`Congratulations, ${userName}!`);
}
