import React from "react";
import logo from '../../assets/images/logo.png';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logoHeader: {
    marginBottom: '-5%',
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.logoHeader}>
      <img src={ logo } alt='logo' />
    </header>
  );
}

export default Header;
