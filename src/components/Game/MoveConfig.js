import React, {useContext} from "react";
import {GameContext} from "../../contexts/GameContext";
import {incrementDecrementOptions} from "../../utils/incrementDecrementOptions";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import {makeStyles} from "@material-ui/core/styles";

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
  const { gameData, incrementDecrementOption } = useContext(GameContext);
  const { matchsticksAmount, matchsticksPerMove, matchsticksForCurrentMove, player } = gameData;
  return (
    <div className='move-config'>
      <Typography className={classes.hint} variant="body1" gutterBottom>
        Set matchsticks number for current move
      </Typography>
      <div>
        <Tooltip title="Remove" aria-label="remove">
          {matchsticksForCurrentMove > 0 && player === 'user' ? (
            <Button
              className={classes.addRemoveButton}
              variant='contained'
              onClick={() => incrementDecrementOption(incrementDecrementOptions.DECREMENT_CURRENT_MOVE)}>
              <RemoveIcon />
            </Button>
          ) : (
            <Button className={classes.addRemoveButton} variant='contained' disabled>
              <RemoveIcon />
            </Button>
          )}
        </Tooltip>
        <Typography className={classes.counter} variant="body1" component="span" align="center">
          { matchsticksForCurrentMove }
        </Typography>
        <Tooltip title="Add" aria-label="add">
          {matchsticksForCurrentMove < matchsticksPerMove
          && player === 'user'
          && matchsticksForCurrentMove < matchsticksAmount ? (
            <Button
              className={classes.addRemoveButton}
              variant='contained'
              onClick={() => incrementDecrementOption(incrementDecrementOptions.INCREMENT_CURRENT_MOVE)}>
              <AddIcon />
            </Button>
          ) : (
            <Button className={classes.addRemoveButton} variant='contained' disabled>
              <AddIcon />
            </Button>
          )}
        </Tooltip>
      </div>
    </div>
  );
}

export default MoveConfig;
