import React,{useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import clsx from 'clsx';
import { addCategory } from "../../actions";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor:"#4b5563"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor:"#4b5563",
  },
  buttons: {
    display: "flex",
    justifyContent:"flex-end"
  },
  
  primary: {

    '&:hover': { // changes colors for button hover state

      backgroundColor: "#fff",

      color: "#000",

    },

  },

  secondary: {

    fontWeight: 700, // make the text bold

  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddCategory() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [parentCategoryId, setParentCategoryId] = useState('');
  const [categoryImage, setCategoryImage] = useState('');
  const category = useSelector(state => state.category)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {

    const form = new FormData();
    

    form.append('name', categoryName);
    form.append('parentId',parentCategoryId);
    form.append('categoryImage',categoryImage);

    dispatch(addCategory(form))
    
    setCategoryName('');
    setParentCategoryId('');

    
    setOpen(false);
  };

  const createCategoryList = (categories,options =[]) => {
      for(let category of categories) {
          options.push({value: category._id, name: category.name});
          if(category.children.length>0){
              createCategoryList(category.children,options)
          }
      }
      return options;
  }

  const handleCategoryImage =(e) => {
      setCategoryImage(e.target.files[0]);
  }

  return (
    <div>
      <Button
                  variant="contained"
                  color="primary"
                  className={clsx(classes.primary,classes.button)}
                  startIcon={<AddCircleIcon />}
                  onClick={handleClickOpen}
                >
                    Add
                </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Add Category
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
        <TextField
          required
          id="outlined-required"
          label="Required"
          placeholder={'Category Name'}
          variant="outlined"
          style={{margin:"3%", width:"30%"}}
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
          <TextField
          id="Category"
          select
          label="Select"
          value={parentCategoryId}
          style={{marginLeft:"3%",marginTop:"3%", width:"30%"}}
          helperText="Please select catgeory"
          variant="outlined"
          onChange={(e) => setParentCategoryId(e.target.value)}
        >
          {createCategoryList(category.categories).map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
        
        </List>
        <Button
            variant="contained"
            containerElement='label' // <-- Just add me!
            label='My Label'
            style={{marginLeft:"3%",marginTop:"1%",height:"5%", width:"30%"}}
        >
            <input type="file" style={{padding:"10%"}} name="categoryImage" onChange={handleCategoryImage}/>
        </Button>
      </Dialog>
    </div>
  );
}
