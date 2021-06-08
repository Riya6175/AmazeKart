import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  img:{
    height:"40px",
    widht:"40%",
    padding: "10px"
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <AppBar position="fixed" style={{background: "#4B5563"}}>
      
        <Toolbar>
          
            {/* <MenuIcon /> */}
            {/* <img src="https://i.postimg.cc/9FngKd9d/header-gray-removebg-preview.png" alt="header" border="0" className={classes.img}/> */}
          <Typography component={ Link } to="/" style={{textDecoration: "none",color:"#fff"}} variant="h6" className={classes.title}>
            AmazeKart - Seller Accout  Grow Your Bussiness. 
          </Typography>
          <Button component={ Link } to="/signin" color="inherit">Login</Button>
          <Button component={ Link } to="/signup" color="inherit" method="POST">Signup</Button>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
