import React from "react";
import Sidebar from "../home/sidebar";
import { makeStyles, useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      display:"flex"
    },
    orders:{
        flexGrow: 1,
        ...theme.mixins.toolbar,
        padding: theme.spacing(2),
    }
  }));

const Orders = () => {
    
      const classes = useStyles();
    return(
        <div style={{ marginTop: "5%"}} className={classes.root}>
        <Sidebar/>
        <div className={classes.orders}>
        Order
        </div>
        </div>
        
        
    )
  
};

export default Orders;