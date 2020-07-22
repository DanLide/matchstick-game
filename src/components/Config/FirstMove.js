import React, {useContext} from "react";
import { makeStyles } from '@material-ui/core/styles';
import {ConfigContext} from "../../contexts/ConfigContext";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
    minWidth: 120,
  },
}));

const FirstMove = () => {
  const classes = useStyles();
  const { setFirstMove } = useContext(ConfigContext);
  return (
    <React.Fragment>
      <Typography variant="body1" gutterBottom>
        Select who moves first
      </Typography>
      <FormControl className={classes.formControl}>
        <Select
          labelId="user-select-label"
          id="user-select"
          defaultValue='user'
          onChange={ (e) => setFirstMove(e.target.value) }
        >
          <MenuItem value='user'>User</MenuItem>
          <MenuItem value='ai'>AI</MenuItem>
        </Select>
      </FormControl>
    </React.Fragment>
  );
}

export default FirstMove;
