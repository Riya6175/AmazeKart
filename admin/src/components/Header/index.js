import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"
import { signout } from '../../actions/auth.actions';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    overflowY:'hidden'
    
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  buttons:{
    '@media(minWidth: 360px)' : {
        display:"None ",
      }
  }
}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch();

  const logout = () => {
        dispatch(signout());
  }

  const renderNonLoggedInLinks = () => {
      return (
          <Toolbar>
              <Button component={ Link } to="/signin" color="inherit" className="buttons">Login</Button>
                <Button component={ Link } to="/signup" color="inherit" method="POST" >Signup</Button>
          </Toolbar>
        
      )
  }
  const renderLoggedInLinks = () => {
    return (
        <Toolbar>
            <Button color="inherit" className="buttons" onClick={logout}>Log Out</Button>
        </Toolbar>
      
    )
}

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <AppBar style={{background: "#4B5563"}}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography component={ Link } to="/" style={{textDecoration: "none",color:"#fff"}} variant="h6" className={classes.title}>
            AmazeKart - Admin 
          </Typography>
          
            {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
          
        </Toolbar>
      </AppBar>
      
    </div>
  );
}
