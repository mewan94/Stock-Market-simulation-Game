import React , {Component} from 'react';
import './input.css';

class Input extends Component{

    _onChange = (e) => {
        if(this.props.submit){
         this.props.submit(e.target.value)
        }
    };

    render(){
        return(
            <div className="group">
                <input type={this.props.type} onChange={this._onChange.bind(this)} defaultValue={this.props.default}/>
                <span className="bar"/>
                <label>{this.props.text}</label>
			</div>
        )
    }
}

export { Input };