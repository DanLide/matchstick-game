import React, {useContext} from "react";
import {ConfigContext} from "../../contexts/ConfigContext";
import {incrementDecrementOptions} from "../../utils/incrementDecrementOptions";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
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
  configContainer: {
    marginBottom: '20px',
  },
  hint: {
    marginBottom: '10px',
  }
}));

const MatchsticksParams = () => {
  const classes = useStyles();
  const { config, incrementDecrementOption } = useContext(ConfigContext);
  return (
    <React.Fragment>
      <div className={classes.configContainer}>
        <Typography className={classes.hint} variant="body1" gutterBottom>
          Set n option
        </Typography>
        <div>
          <Tooltip title="Remove" aria-label="remove">
            {config.n > 0 ? (
              <Button className={classes.addRemoveButton} variant='contained' onClick={() => incrementDecrementOption(incrementDecrementOptions.DECREMENT_N)}>
                <RemoveIcon />
              </Button>
            ) : (
              <Button className={classes.addRemoveButton} variant='contained' disabled>
                <RemoveIcon />
              </Button>
            )}
          </Tooltip>
          <Typography className={classes.counter} variant="body1" component="span" align="center">
            { config.n }
          </Typography>
          <Tooltip title="Add" aria-label="add">
            <Button className={classes.addRemoveButton} variant='contained' onClick={() => incrementDecrementOption(incrementDecrementOptions.INCREMENT_N)}>
              <AddIcon />
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className={classes.configContainer}>
        <Typography className={classes.hint} variant="body1" gutterBottom>
          Set m option
        </Typography>
        <div>
          <Tooltip title="Remove" aria-label="remove">
            {config.m > 0 ? (
              <Button className={classes.addRemoveButton} variant='contained' onClick={() => incrementDecrementOption(incrementDecrementOptions.DECREMENT_M)}>
                <RemoveIcon />
              </Button>
            ) : (
              <Button className={classes.addRemoveButton} variant='contained' disabled>
                <RemoveIcon />
              </Button>
            )}
          </Tooltip>
          <Typography className={classes.counter} variant="body1" component="span" align="center">
            { config.m }
          </Typography>
          <Tooltip title="Add" aria-label="add">
            <Button className={classes.addRemoveButton} variant='contained' onClick={() => incrementDecrementOption(incrementDecrementOptions.INCREMENT_M)}>
              <AddIcon />
            </Button>
          </Tooltip>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MatchsticksParams;
