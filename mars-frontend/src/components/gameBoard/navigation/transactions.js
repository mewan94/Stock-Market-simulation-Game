import React , {Component} from 'react';
import { Timeline } from 'antd';
import { withStyles } from '@material-ui/core/styles';
import 'antd/dist/antd.css';

const styles = theme => ({
    Timeline :{
        padding : theme.spacing.unit * 4,
        color: '#fff',
    },
    Item :{
        fontSize:'10pt',
    }
});

class History extends Component{
    render(){
        const { classes } = this.props;
        return(
            <Timeline className={classes.Timeline}>
                <Timeline.Item color="green" className={classes.Item}>JohnDoe</Timeline.Item>
                <Timeline.Item className={classes.Item}>Jane</Timeline.Item>
                <Timeline.Item color="red" className={classes.Item}>Manduzack</Timeline.Item>
                <Timeline.Item className={classes.Item}>laura</Timeline.Item>
            </Timeline>
        )
    }
}

export default withStyles(styles) (History);