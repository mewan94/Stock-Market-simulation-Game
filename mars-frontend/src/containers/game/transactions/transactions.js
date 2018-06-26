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
    render(){
        const { classes } = this.props;
        return(
            <div className="tester">
                <Scrollbox>
                    <div><h1>My Transactions</h1></div>
                    <div className="company">
                        <div className="item-holder-1">
                            <h4>{'companyName'}</h4>
                        </div>
                        <div className="item-holder-2">
                            <h5>LKR. {'unitPrice'}</h5>
                        </div>
                        <div className="item-holder-3">
                            <h6>Buy</h6>
                        </div>
                        <div className="item-holder-3">
                            <h6>Buy</h6>
                        </div>
                    </div>
                    <div className="company">
                        <div className="item-holder-1">
                            <h4>{'companyName'}</h4>
                        </div>
                        <div className="item-holder-2">
                            <h5>LKR. {'unitPrice'}</h5>
                        </div>
                        <div className="item-holder-3">
                            <h6>Buy</h6>
                        </div>
                    </div>
                    <div className="company">
                        <div className="item-holder-1">
                            <h4>{'companyName'}</h4>
                        </div>
                        <div className="item-holder-2">
                            <h5>LKR. {'unitPrice'}</h5>
                        </div>
                        <div className="item-holder-3">
                            <h6>Buy</h6>
                        </div>
                    </div>
                    <div className="company">
                        <div className="item-holder-1">
                            <h4>{'companyName'}</h4>
                        </div>
                        <div className="item-holder-2">
                            <h5>LKR. {'unitPrice'}</h5>
                        </div>
                        <div className="item-holder-3">
                            <h6>Buy</h6>
                        </div>
                    </div>
                    <div className="company">
                        <div className="item-holder-1">
                            <h4>{'companyName'}</h4>
                        </div>
                        <div className="item-holder-2">
                            <h5>LKR. {'unitPrice'}</h5>
                        </div>
                        <div className="item-holder-3">
                            <h6>Buy</h6>
                        </div>
                    </div>
                    <div className="company">
                        <div className="item-holder-1">
                            <h4>{'companyName'}</h4>
                        </div>
                        <div className="item-holder-2">
                            <h5>LKR. {'unitPrice'}</h5>
                        </div>
                        <div className="item-holder-3">
                            <h6>Buy</h6>
                        </div>
                    </div>
                    <div className="company">
                        <div className="item-holder-1">
                            <h4>{'companyName'}</h4>
                        </div>
                        <div className="item-holder-2">
                            <h5>LKR. {'unitPrice'}</h5>
                        </div>
                        <div className="item-holder-3">
                            <h6>Buy</h6>
                        </div>
                    </div>
                    <div className="company">
                        <div className="item-holder-1">
                            <h4>{'companyName'}</h4>
                        </div>
                        <div className="item-holder-2">
                            <h5>LKR. {'unitPrice'}</h5>
                        </div>
                        <div className="item-holder-3">
                            <h6>Buy</h6>
                        </div>
                    </div>
                    <div className="company">
                        <div className="item-holder-1">
                            <h4>{'companyName'}</h4>
                        </div>
                        <div className="item-holder-2">
                            <h5>LKR. {'unitPrice'}</h5>
                        </div>
                        <div className="item-holder-3">
                            <h6>Buy</h6>
                        </div>
                    </div>
                    <div className="company">
                        <div className="item-holder-1">
                            <h4>{'companyName'}</h4>
                        </div>
                        <div className="item-holder-2">
                            <h5>LKR. {'unitPrice'}</h5>
                        </div>
                        <div className="item-holder-3">
                            <h6>Buy</h6>
                        </div>
                    </div>
                    <div className="company">
                        <div className="item-holder-1">
                            <h4>{'companyName'}</h4>
                        </div>
                        <div className="item-holder-2">
                            <h5>LKR. {'unitPrice'}</h5>
                        </div>
                        <div className="item-holder-3">
                            <h6>Buy</h6>
                        </div>
                    </div>
                    <div className="company">
                        <div className="item-holder-1">
                            <h4>{'companyName'}</h4>
                        </div>
                        <div className="item-holder-2">
                            <h5>LKR. {'unitPrice'}</h5>
                        </div>
                        <div className="item-holder-3">
                            <h6>Buy</h6>
                        </div>
                    </div>
                    <div className="company">
                        <div className="item-holder-1">
                            <h4>{'companyName'}</h4>
                        </div>
                        <div className="item-holder-2">
                            <h5>LKR. {'unitPrice'}</h5>
                        </div>
                        <div className="item-holder-3">
                            <h6>Buy</h6>
                        </div>
                    </div>
                    <div className="company">
                        <div className="item-holder-1">
                            <h4>{'companyName'}</h4>
                        </div>
                        <div className="item-holder-2">
                            <h5>LKR. {'unitPrice'}</h5>
                        </div>
                        <div className="item-holder-3">
                            <h6>Buy</h6>
                        </div>
                    </div>
                </Scrollbox>
            </div>
        )
    }
}

export default withStyles(styles) (History);