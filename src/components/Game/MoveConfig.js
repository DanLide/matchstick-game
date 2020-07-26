import React, {useContext} from "react";
import {GameContext} from "../../contexts/GameContext";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import {makeStyles} from "@material-ui/core/styles";
import {decrementCurrentMove, incrementCurrentMove} from "../../actions/gameActions";

const useStyles = makeStyles((theme) => ({
  counter: {
    margin: '0 20px',
  },
  addRemoveButton: {
    borderRadius: '100%',
    minWidth: '30px',
    maxWidth: '30px',
    padding: '5px 17px',
  },
  hint: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
  }
}));

const MoveConfig = () => {
  const classes = useStyles();
  const { gameState, dispatchGame } = useContext(GameContext);
  const { matchsticksAmount, matchsticksPerMove, matchsticksForCurrentMove, player } = gameState;
  return (
    <div className='move-config'>
      <Typography className={classes.hint} variant="body1" gutterBottom>
        Set matchsticks number for current move
      </Typography>
      <div>
        {matchsticksForCurrentMove > 0 && player === 'user' ? (
          <Tooltip title="Remove" aria-label="remove">
            <Button
              className={classes.addRemoveButton}
              variant='contained'
              onClick={() => dispatchGame(decrementCurrentMove())}>
              <RemoveIcon />
            </Button>
          </Tooltip>
        ) : (
          <Button className={classes.addRemoveButton} variant='contained' disabled>
            <RemoveIcon />
          </Button>
        )}
        <Typography className={classes.counter} variant="body1" component="span" align="center">
          { matchsticksForCurrentMove }
        </Typography>
        {matchsticksForCurrentMove < matchsticksPerMove
        && player === 'user'
        && matchsticksForCurrentMove < matchsticksAmount ? (
          <Tooltip title="Add" aria-label="add">
            <Button
              className={classes.addRemoveButton}
              variant='contained'
              onClick={() => dispatchGame(incrementCurrentMove())}>
              <AddIcon />
            </Button>
          </Tooltip>
        ) : (
          <Button className={classes.addRemoveButton} variant='contained' disabled>
            <AddIcon />
          </Button>
        )}
      </div>
    </div>
  );
}

export default MoveConfig;
