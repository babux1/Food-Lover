import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    textAlign: "center",
    border: "grey solid 1px",
    padding: "1rem",
    width: "100%",
    minHeight: "45rem",
    margin: "20px",
    boxShadow: "3px 10px #6f8f78",
    fontFamily: "Barlow Condensed",
    letterSpacing: "2px",
    backgroundColor: "white",
    marginTop: 70,
    borderRadius: "3%",
    maxWidth: "21%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  moreButton:{
    justifyContent: "center",
    margin: theme.spacing(3, 0, 2),
    border: 0,
    borderRadius: "5%",
    boxShadow: '0 3px 5px 2px rgba(107, 125, 108)',
    color: '#25853f',
    height: 60,
    width: 150,
    padding: '0 30px',
    fontSize: 20,
    marginLeft: 170
    

  },

  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },

  description: {
    fontSize: "1.5rem",
    paddingTop: 20
  },

  media: {

  },
  

  cardTitle: {
    fontSize: "3rem",
    fontFamily: "Barlow Condensed",
    letterSpacing: "1px",
  },
}));

const DialogTitle = withStyles(useStyles)((props) => {
  const { children, classes, onClose, ...other } = props;
  
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function DirectoryCard(props) {

  const classes = useStyles()

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.card}>

            <Typography
              className={classes.cardTitle}
              color="black"
              gutterBottom
            >
            {props.food.title}
            </Typography>
            <img className={classes.image_url} src={props.food.image_url} alt=""/>

            <br/>
            <Typography variant="body2" component="p" className={classes.description}>
            {props.food.description}
            </Typography>
            <br/>
          <Button variant="outlined" color="primary" className={classes.moreButton} onClick={handleClickOpen}>
            More
          </Button>
          <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              {props.food.title}
            </DialogTitle>
            <div>
              <CardMedia
              component="img" src={props.food.image_url}
              className={classes.media}
              />
            </div>
            <DialogContent dividers>
              <Typography gutterBottom>
              Type - {props.food.category}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={ () => (props.addToFavorite(props.food))} component={Link} to="/user" variant="outlined" color="primary">
                Add to favorite!
              </Button>
            </DialogActions>
          </Dialog>
    </div>
  );
}