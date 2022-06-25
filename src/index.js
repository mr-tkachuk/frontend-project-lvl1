import readlineSync from 'readline-sync';

const askUserName = () => readlineSync.question('May I have your name? ');

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = askUserName();
  console.log(`Hello, ${userName}!`);
  return userName;
};

const showRule = (rule) => console.log(rule);

const askQuestion = (task) => console.log(`Question: ${task}`);

const readAnswer = () => readlineSync.question('Your answer: ');

const checkAnswer = (correctAnswer, answer) => correctAnswer === answer;

const showResultIsCorrect = () => console.log('Correct!');

const showResultIsWrong = (correctAnswer, wrongAnswer) => {
  console.log(`'${wrongAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
};
const congratUser = (userName) => console.log(`Congratulations, ${userName}!`);

const invitePlayMore = (userName) => console.log(`Let's try again, ${userName}!`);

const getPairs = (makePair) => {
  const roundPairs = new Array(3);
  roundPairs.fill([]);
  return roundPairs.map(makePair);
};

const playRound = (previousResult, nextRound) => {
  let result = previousResult;
  if (result) {
    const [task, correctAnswer] = nextRound;
    askQuestion(task);
    const answer = readAnswer();
    result = checkAnswer(correctAnswer, answer);
    if (result) showResultIsCorrect();
    if (!result) showResultIsWrong(correctAnswer, answer);
  }
  return result;
};

const playGame = ({ rule, makePair }) => {
  const userName = greetUser();

  showRule(rule);

  const roundPairs = getPairs(makePair);

  const result = roundPairs.reduce(playRound, true);

  if (result) congratUser(userName);
  if (!result) invitePlayMore(userName);
};

export default playGame;
