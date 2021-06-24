import React, { useEffect } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../actions";
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import categoryImages from '../../containers/category/images';
import SubCategory from "./subcategory";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 100,
  },
  media: {
    height: "300px",
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  card: {
    
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
  },
  title:{
    marginLeft:'10%'
  }
}));



export default function RecipeReviewCard(props) {

  const category = useSelector(state => state.category)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory())
  }, [])

  console.log(category)

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Container>
        <Grid container spacing={1}>
          {category.categories.map(child => (
            <Grid item xs={12} sm={4} key={category.id}>
              <Card className={classes.card}>
                    <CardMedia
                      
                      className={classes.media}
                      image={""}
                      backgroundColor="#000"
                    />
                  <CardActions disableSpacing style={{paddingTop:'0%',paddingBottom:'0%'}}>
                    <Typography className={classes.title}>
                      <h2 style={{paddingTop:'0%',margin:'0px',marginBottom:'4px',fontFamily:'Montserrat'}}>{child.name}</h2>
                    </Typography>
                    <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                      })}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>


                  <Collapse in={expanded} timeout="auto" unmountOnExit style={{paddingTop:'0%'}}>
                            <SubCategory category={child} style={{paddingTop:'0%'}}/>
                  </Collapse>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

