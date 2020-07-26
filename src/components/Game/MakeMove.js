import React, {useContext, useEffect} from "react";
import {GameContext} from "../../contexts/GameContext";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {makeAIMove, makePlayerMove} from "../../actions/gameActions";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(3),
  },
}));

const MakeMove = () => {
  const classes = useStyles();
  const { gameState, dispatchGame } = useContext(GameContext);
  const { player, matchsticksForCurrentMove } = gameState;

  useEffect(() => {
   if (player === 'ai') {
     setTimeout(() => dispatchGame(makeAIMove()), 1500);
   }
  }, [player, dispatchGame]);

  return (
    <div className='make-move'>
      {player === 'user' && matchsticksForCurrentMove > 0 ? (
        <Button
          variant="contained"
          onClick={() => dispatchGame(makePlayerMove())}
          className={classes.button}
        >
          Make a move
        </Button>
      ) : (
        <Button
          variant="contained"
          className={classes.button}
          disabled
        >
          Make a move
        </Button>
      )}
    </div>
  );
}

export default MakeMove;
