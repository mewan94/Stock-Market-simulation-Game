import React, { Component } from "react";
import "./scrollbox.css";

class Scrollbox extends Component {
  render() {

    return (
      <div className="scrollbox" tabIndex="0">
        <div className="scrollbox-content" tabIndex="0">
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default Scrollbox;
