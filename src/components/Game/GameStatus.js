import React, {useContext} from "react";
import {GameContext} from "../../contexts/GameContext";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  playerStatus: {
    color: 'grey',
  },
  gameResultWin: {
    color: 'green'
  },
  gameResultLose: {
    color: "#c43b3b",
  },
  score: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  scoreContainer: {
    marginTop: theme.spacing(2),
    justifyContent: 'center',
  },
  divider: {
    backgroundColor: 'rgb(74, 74, 74)',
  }
}));

const GameStatus = () => {
  const classes = useStyles();
  const { gameData } = useContext(GameContext);
  let statusText;

  if (gameData.matchsticksAmount !== 0) {
    statusText = gameData.player === 'user' ? (
      <Typography className={classes.playerStatus} variant="body1" component="p" align="center">
        Now it is your turn
      </Typography>
    ) : (
      <Typography className={classes.playerStatus} variant="body1" component="p" align="center">
        AI is ifking, please wait a moment
      </Typography>
    );
  } else {
    if (gameData.userScore % 2 === 0) {
      statusText = <Typography className={classes.gameResultWin} variant="h6" component="p" align="center">
        You win
      </Typography>;
    } else {
      statusText = <Typography className={classes.gameResultLose} variant="h6" component="p" align="center">
        If-machine win
      </Typography>;
    }
  }

  return (
    <div className='game-status'>
      {statusText}
      <div className='users-score'>
        <Grid container alignItems="center" className={classes.scoreContainer}>
          <Typography className={classes.score} variant="body1" component="p" align="center">
            Your score: {gameData.userScore}
          </Typography>
          <Divider className={classes.divider} orientation="vertical" flexItem />
          <Typography className={classes.score} variant="body1" component="p" align="center">
            AI score: {gameData.aiScore}
          </Typography>
        </Grid>
      </div>
    </div>
  );
}

export default GameStatus;
