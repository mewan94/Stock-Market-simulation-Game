import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function getModalStyle() {
 const top = 30;
 const left = 45;

 return {
   top: `${top}%`,
   left: `${left}%`,
   transform: `translate(-${top}%, -${left}%)`,
 };
}

const styles = theme => ({
 paper: {
   position: 'absolute',
   width: theme.spacing.unit * 60,
   backgroundColor: theme.palette.background.paper,
   boxShadow: theme.shadows[5],
   padding: theme.spacing.unit * 4,
 },
 button: {
   marginLeft: 10+'px',
 }
});

class SimpleModal extends React.Component {

 state = {
   open: false,
 };

 render() {
   const { classes,company } = this.props;
   return (
       <Modal
         aria-labelledby="simple-modal-title"
         aria-describedby="simple-modal-description"
         open={this.state.open}
         onClose={this.handleClose}
       >
         <div style={getModalStyle()} className={classes.paper}>
             <Grid container spacing={24}>
                 <Grid item sm={12}>
                     <Typography variant="display1">
                         {company.name}
                     </Typography>
                 </Grid>
                 <Grid item sm={6}>
                     <Typography variant="headline">
                         Unit Price
                     </Typography>
                 </Grid>
                 <Grid item sm={6}>
                     <Typography variant="subheading">
                         RS. 1000.00
                     </Typography>
                 </Grid>
                 <Grid item sm={6}>
                     <Typography variant="headline">
                         Current stock
                     </Typography>
                 </Grid>
                 <Grid item sm={6}>
                     <Typography variant="subheading">
                         20
                     </Typography>
                 </Grid>
                 <Grid item sm={6}>
                     <TextField
                         label="Number of Stocks"
                         className={classes.textField}
                     />
                 </Grid>
                 <Grid item sm={6}>
                     {this.props.type === 'buy'?
                         <Button variant="contained" color="primary" className={classes.button}>
                             Buy
                         </Button>:
                         <Button variant="contained" color="secondary" className={classes.button}>
                             Sell
                         </Button>
                     }
                     <Button variant="contained" className={classes.button}  onClick={this.handleClose.bind(this)}>
                         Cancel
                     </Button>
                 </Grid>
             </Grid>
         </div>
       </Modal>

   );
 }

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

}

// SimpleModal.propTypes = {
//  classes: PropTypes.object.isRequired,
// };

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;