import React , {Component} from 'react';
import { Timeline } from 'antd';
import { withStyles } from '@material-ui/core/styles';
import 'antd/dist/antd.css';
import Scrollbox from "../../../components/common/scrollbox/index";

const styles = theme => ({
    Timeline :{
        padding : theme.spacing.unit * 10,
    }
});

class History extends Component{
    constructor(props){
        super(props);
        this.state={
            history:this.props.history
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.history !== this.state.history){
            this.setState({
                history:nextProps.history
            })
        }
    }

    render(){
        const { classes, data} = this.props;
        return(
            <div className="tester">
                <Scrollbox>
                    <div><h1>My Transactions</h1></div>
                    {data && data.map((item,i)=>{
                        return(
                        <div className="company" key={i}>
                            <div className="item-holder-1">
                                <h4>{item.stock}</h4>
                            </div>
                            <div className="item-holder-2">
                                <h5>{item.amount} stocks</h5>
                            </div>
                            <div className="item-holder-3">
                                <h6>{item.type}</h6>
                            </div>
                            <div className="item-holder-3">
                                <h6>Buy</h6>
                            </div>
                        </div>)
                    })}
                </Scrollbox>
            </div>
        )
    }
}

export default withStyles(styles) (History);