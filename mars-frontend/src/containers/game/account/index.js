import React from 'react';
import Scrollbox from "../../../components/common/scrollbox/index";
import '../../../components/gameBoard/company/company.css';

class MyAccount extends React.Component {

    render(){
        const { classes } = this.props;
        
        return (
            <div className="tester">
                <Scrollbox>
                    <div><h1>My Stocks</h1></div>
                    {this.props.data && this.props.data.map((item,i)=>{
                        if(item.amount > 0){
                            return(
                                <div className="company" key={i}>
                                    <div className="item-holder-1">
                                        <h4>{item.stock}</h4>
                                    </div>
                                    <div className="item-holder-2">
                                        <h5>{item.amount} stocks</h5>
                                    </div>
                                </div>)
                        }else{
                            return null
                        }
                    })}
                </Scrollbox>
            </div>
        );
    }
}

export default MyAccount;