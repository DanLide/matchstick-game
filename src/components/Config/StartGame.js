import React, {useContext} from "react";
import {useHistory} from "react-router-dom";
import {GameContext} from "../../contexts/GameContext";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {loadConfig} from "../../actions/gameActions";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const StartGame = () => {
  const classes = useStyles();
  let history = useHistory();
  const { config, dispatchGame, initGameState } = useContext(GameContext);

  const startGame = () => {
    dispatchGame(loadConfig(config, initGameState));
    history.push('/start/')
  }

  return config.n > 0 && config.m > 0 && config.n >= config.m ? (
      <Button
        variant="contained"
        onClick={startGame}
        className={classes.button}
      >
        Start a new game
      </Button>
  ) : (
    <Button
      variant="contained"
      className={classes.button}
      disabled
    >
      Start a new game
    </Button>
  );
}

export default StartGame;
