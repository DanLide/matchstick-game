const calculateAIMove = (matchsticksAmount, matchsticksPerMove, aiScore, currentMove = 0) => {
  if (matchsticksPerMove % 2 === 0) {
    if (aiScore % 2 === 0) {
      while (currentMove < matchsticksPerMove ) {
        currentMove += 1;
        const remainder = matchsticksAmount - currentMove;
        if (remainder % 6 === 0 || remainder % 6 === 1) {
          return currentMove;
        }
      }
      return currentMove;
    } else {
      while (currentMove < matchsticksPerMove) {
        currentMove += 1;
        const remainder = matchsticksAmount - currentMove;
        if (remainder % 6 === 5) {
          return currentMove;
        }
      }
      return currentMove;
    }
  } else {
    while (currentMove < matchsticksPerMove) {
      currentMove += 1;
      const remainder = matchsticksAmount - currentMove;
      if (remainder % 4 === 0 || remainder % 4 === 1) {
        return currentMove;
      }
    }
    return currentMove;
  }
}

export default calculateAIMove;
