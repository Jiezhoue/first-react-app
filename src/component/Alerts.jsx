import React from "react";

export default class Alerts extends React.Component {


  render() {
    return(
    <>
      <div className="alert alert-primary alert-dismissible" role="alert">
        {this.props.children}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={this.props.onClick}></button>
      </div>
      
    </>
      
    )

  }
}