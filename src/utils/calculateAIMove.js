const calculateAIMove = (matchsticksAmount, matchsticksPerMove) => {
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  if (matchsticksAmount >= matchsticksPerMove) {
    return getRandomInt(1, matchsticksPerMove);
  } else {
    return getRandomInt(1, matchsticksAmount);
  }
}

export default calculateAIMove;
