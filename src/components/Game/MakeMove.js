import React, {useContext, useEffect} from "react";
import {GameContext} from "../../contexts/GameContext";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(3),
  },
}));

const MakeMove = () => {
  const classes = useStyles();
  const { gameData, makeMove } = useContext(GameContext);
  const { player, matchsticksForCurrentMove } = gameData;

  useEffect(() => {
   if (player === 'ai') {
     setTimeout(() => makeMove(), 1500);
   }
  }, [player, makeMove]);

  return (
    <div className='make-move'>
      {player === 'user' && matchsticksForCurrentMove > 0 ? (
        <Button
          variant="contained"
          onClick={makeMove}
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
