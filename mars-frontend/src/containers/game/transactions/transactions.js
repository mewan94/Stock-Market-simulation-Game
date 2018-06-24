import React , {Component} from 'react';
import { Timeline } from 'antd';
import { withStyles } from '@material-ui/core/styles';
import 'antd/dist/antd.css';

const styles = theme => ({
    Timeline :{
        padding : theme.spacing.unit * 10,
    }
});

class History extends Component{
    render(){
        const { classes } = this.props;
        return(
            <Timeline className={classes.Timeline}>
                <Timeline.Item color="green" >Bought 200 Stocks from AT&T </Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item color="red" >Technical testing 2015-09-01</Timeline.Item>
                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
            </Timeline>
        )
    }
}

export default withStyles(styles) (History);