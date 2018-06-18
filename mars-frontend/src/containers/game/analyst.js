import React , {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

class Analyst extends Component{

    render(){
        const { classes } = this.props;
        const bull = <span className={classes.bullet}>•</span>;

        return(
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary">
                            Tip from Analyst
                        </Typography>
                        <Typography variant="headline" component="h2">
                            There will  be Boom
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            on Telecommunication sector
                        </Typography>
                        <Typography component="p">
                            within next round
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(Analyst);