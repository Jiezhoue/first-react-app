import React from "react";

export default class Buttons extends React.Component {

  
  render() {
    return (
      <>
        <button type="button" className={ "btn btn-"+this.props.color } id="liveAlertBtn" onClick={this.props.onClick}>Click Me</button>
      </>
    );
  }
}






