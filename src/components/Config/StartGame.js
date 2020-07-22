import React, {useContext} from "react";
import {useHistory} from "react-router-dom";
import {ConfigContext} from "../../contexts/ConfigContext";
import {GameContext} from "../../contexts/GameContext";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const StartGame = () => {
  const classes = useStyles();
  let history = useHistory();
  const { config } = useContext(ConfigContext);
  const { loadConfig } = useContext(GameContext);

  const startGame = () => {
    loadConfig(config);
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
