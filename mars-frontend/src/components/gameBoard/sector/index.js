import React , {Component} from 'react';
import './sector.css';

class Sector extends Component{
    render(){
        let sectorName = this.props.text;    
        return(
            <div className="sector">
                <span>{sectorName}</span>
            </div>    
        )
    }
}

export default Sector;