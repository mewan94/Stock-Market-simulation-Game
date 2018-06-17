
import React from 'react';
//import PropTypes 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';


function getModalStyle() {
 const top = 50;
 const left = 50;

 return {
   top: `${top}%`,
   left: `${left}%`,
   transform: `translate(-${top}%, -${left}%)`,
 };
}

const styles = theme => ({
 paper: {
   position: 'absolute',
   width: theme.spacing.unit * 50,
   backgroundColor: theme.palette.background.paper,
   boxShadow: theme.shadows[5],
   padding: theme.spacing.unit * 4,
 },
});

class SimpleModal extends React.Component {
 state = {
   open: false,
 };

 handleOpen = () => {
   this.setState({ open: true });
 };

 handleClose = () => {
   this.setState({ open: false });
 };

 componentWillReceiveProps(nextProps){
     if(nextProps.open){
         this.handleOpen()
     }
 }

 render() {
   const { classes } = this.props;

   return (
    
       <Modal
         aria-labelledby="simple-modal-title"
         aria-describedby="simple-modal-description"
         open={this.state.open}
         onClose={this.handleClose}
       >
         <div style={getModalStyle()} className={classes.paper}>
           <Typography variant="HeadLine" id="modal-title">
             Company Name
           </Typography>
           <hr></hr>
           <Typography variant="subheading">
             Unit Price
           </Typography>
           <Typography variant="subheading">
             1000
           </Typography>
           <Typography variant="subheading">
             Current stock
           </Typography>
           <Typography variant="subheading">
             20
           </Typography>
          <div>
           <TextField
         
          label="Buy"
          className={classes.textField}
          margin="normal"
          />
          <IconButton color="primary" className={classes.button} aria-label="Add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
          </div>
         </div>
       </Modal>

   );
 }
}

// SimpleModal.propTypes = {
//  classes: PropTypes.object.isRequired,
// };

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;