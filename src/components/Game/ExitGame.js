import React, {useContext} from "react";
import { useHistory } from "react-router-dom";
import {GameContext} from "../../contexts/GameContext";
import {makeStyles} from "@material-ui/core/styles";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import {resetConfig} from "../../actions/configActions";
import {resetGameState} from "../../actions/gameActions";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(3),
  },
}));

const ExitGame = () => {
  const classes = useStyles();
  let history = useHistory();
  const { dispatchConfig, initConfig, dispatchGame, initGameState } = useContext(GameContext);

  const exitGame = () => {
    dispatchConfig(resetConfig(initConfig));
    dispatchGame(resetGameState(initGameState));
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
