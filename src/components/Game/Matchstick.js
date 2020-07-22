import React, {useContext} from "react";
import matchstick from '../../assets/images/matchstick.png';
import {GameContext} from "../../contexts/GameContext";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  matchstickImage: {
    width: '100%',
  },
  matchstickList: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
    listStyleType: 'none',
    padding: '0',
  }
}));

const Matchstick = () => {
  const classes = useStyles();
  const { gameData } = useContext(GameContext);
  const { matchsticksAmount, matchstickWidth } = gameData;
  const matchsticks = [];
  for (let i = 0; i < matchsticksAmount; i++) {
    matchsticks.push(
      <li className='matchstick-list-item' style={{ width: `${ matchstickWidth }%` }} key={i} >
        <img className={classes.matchstickImage} src={ matchstick }  alt='matchstick' />
      </li>
    );
  }
  return (
    <div className='matchstick'>
      <div className='matchstick-counter'>
        <Typography variant="body2" component="span" align="center">
          {`x${gameData.matchsticksAmount}`}
        </Typography>
      </div>
      <ul className={classes.matchstickList}>
        {matchsticks}
      </ul>
    </div>
  );
}

export default Matchstick;
