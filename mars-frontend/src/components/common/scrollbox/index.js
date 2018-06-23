import React, { Component } from "react";
import "./scrollbox.css";

class Scrollbox extends Component {
  render() {

    return (
      <div className="scrollbox" tabindex="0">
        <div className="scrollbox-content" tabindex="0">
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default Scrollbox;
