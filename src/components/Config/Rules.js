import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  rules: {
    margin: theme.spacing(4),
  },
}));

const Rules = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Rules
      </Typography>
      <Box className={classes.rules}>
        <Typography variant='body1' color='textPrimary'>
          Two are playing a game. From a pile of <strong><i>2n + 1</i></strong> matches each player takes from <strong><i>1 to m</i></strong> per move.
          The winner is the one who has an even number of matches at the end of the game - after all the matches have been disassembled.
        </Typography>
      </Box>
    </React.Fragment>
  );
}

export default Rules;
