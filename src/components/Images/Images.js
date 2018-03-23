import React from "react";
import "./Images.css";

class Images extends React.Component {

  render () {

    return (
      <div className="image" onClick={() => {
        this.props.handleClick(this.props.index)
      }}>
        <div className="img-container">
          <img src={this.props.image} />
        </div>
      </div>
      );
  }
}

export default Images;
