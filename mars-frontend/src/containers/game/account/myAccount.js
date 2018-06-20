import React , {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CustomPaginationActionsTable from './Stocks';

class MyAccount extends Component{
    render(){
        return(
            <Grid container spacing={24}>
                <Grid item xs={6} sm={6}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary">
                                Bank Balance
                            </Typography>
                            <Typography variant="headline" component="h2">
                                Rs. 10000
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary">
                                Stock Balance
                            </Typography>
                            <Typography variant="headline" component="h2">
                                450 Stocks worth Rs. 10000
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <CustomPaginationActionsTable/>
                </Grid>
            </Grid>
        )
    }
}

export default MyAccount;