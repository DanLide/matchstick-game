import React, {useContext} from "react";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";
import {decrementM, decrementN, incrementM, incrementN} from "../../actions/configActions";
import {GameContext} from "../../contexts/GameContext";

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
  configContainer: {
    marginBottom: '20px',
  },
  hint: {
    marginBottom: '10px',
  }
}));

const MatchsticksParams = () => {
  const classes = useStyles();
  const { config, dispatchConfig } = useContext(GameContext);
  return (
    <React.Fragment>
      <div className={classes.configContainer}>
        <Typography className={classes.hint} variant="body1" gutterBottom>
          Set n option (2n + 1 matches in a pile)
        </Typography>
        <div>
          {config.n > 0 ? (
            <Tooltip title="Remove" aria-label="remove">
              <Button
                className={classes.addRemoveButton}
                variant='contained'
                onClick={() => dispatchConfig(decrementN())}>
                <RemoveIcon />
              </Button>
            </Tooltip>
          ) : (
            <Button className={classes.addRemoveButton} variant='contained' disabled>
              <RemoveIcon />
            </Button>
          )}
          <Typography className={classes.counter} variant="body1" component="span" align="center">
            { config.n }
          </Typography>
          <Tooltip title="Add" aria-label="add">
            <Button
              className={classes.addRemoveButton}
              variant='contained'
              onClick={() => dispatchConfig(incrementN())}>
              <AddIcon />
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className={classes.configContainer}>
        <Typography className={classes.hint} variant="body1" gutterBottom>
          Set limit per move (m option)
        </Typography>
        <div>
          {config.m > 0 ? (
            <Tooltip title="Remove" aria-label="remove">
              <Button
                className={classes.addRemoveButton}
                variant='contained'
                onClick={() => dispatchConfig(decrementM())}>
                <RemoveIcon />
              </Button>
            </Tooltip>
          ) : (
            <Button className={classes.addRemoveButton} variant='contained' disabled>
              <RemoveIcon />
            </Button>
          )}
          <Typography className={classes.counter} variant="body1" component="span" align="center">
            { config.m }
          </Typography>
          <Tooltip title="Add" aria-label="add">
            <Button
              className={classes.addRemoveButton}
              variant='contained'
              onClick={() => dispatchConfig(incrementM())}>
              <AddIcon />
            </Button>
          </Tooltip>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MatchsticksParams;
