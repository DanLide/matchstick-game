import React, {useContext} from "react";
import { useHistory } from "react-router-dom";
import {ConfigContext} from "../../contexts/ConfigContext";
import {GameContext} from "../../contexts/GameContext";
import {makeStyles} from "@material-ui/core/styles";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(3),
  },
}));

const ExitGame = () => {
  const classes = useStyles();
  let history = useHistory();
  const { restoreConfigToInit } = useContext(ConfigContext);
  const { restoreGameDataToInit } = useContext(GameContext);

  const exitGame = () => {
    restoreConfigToInit();
    restoreGameDataToInit();
    history.push('/')
  }

  return (
    <div className='exit-game'>
      <Tooltip title="Exit the game" aria-label="exit-game">
        <Button className={classes.button} variant='outlined' onClick={exitGame}>
          <ExitToAppIcon />
        </Button>
      </Tooltip>
    </div>
  );
}

export default ExitGame;
