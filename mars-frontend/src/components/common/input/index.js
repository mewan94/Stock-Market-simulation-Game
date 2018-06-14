import React , {Component} from 'react';
import './input.css';

class Input extends Component{
    render(){
        return(
            <div className="group">      
					    <input type={this.props.type} required/>
					    <span className="bar"></span>
					    <label>{this.props.text}</label>
			</div>
        )
    }
}

export { Input };