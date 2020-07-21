const calculateAIMove = (matchsticksAmount, matchsticksPerMove, aiScore, localMatchsticksPerMove = 1) => {
  if (matchsticksPerMove % 2 === 0) {
    if (aiScore % 2 === 0) {
      while (localMatchsticksPerMove <= matchsticksPerMove) {
        const remainder = matchsticksAmount - localMatchsticksPerMove;
        if (remainder % 6 === 0 || remainder % 6 === 1) {
          return localMatchsticksPerMove;
        }
        localMatchsticksPerMove += 1;
      }
    } else {
      while (localMatchsticksPerMove <= matchsticksPerMove) {
        const remainder = matchsticksAmount - localMatchsticksPerMove;
        if (remainder % 6 === 5) {
          return localMatchsticksPerMove;
        }
        if (remainder < 5) {
          if (remainder % 6 === 0 || remainder % 6 === 1) {
            return localMatchsticksPerMove;
          }
        }
        localMatchsticksPerMove += 1;
      }
    }
  } else {
    while (localMatchsticksPerMove <= matchsticksPerMove) {
      const remainder = matchsticksAmount - localMatchsticksPerMove;
      if (remainder % 4 === 0 || remainder % 4 === 1) {
        return localMatchsticksPerMove;
      }

      localMatchsticksPerMove += 1;
    }
  }
}

export default calculateAIMove;
