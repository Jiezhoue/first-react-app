import  Alert  from "./component/Alerts"
import './App.css';
import Buttons from './component/Buttons';
import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  
  handleButtonClick(){
    this.setState({visible: true})
  }

  render(){
    return (
      <div className="App">
        {this.state.visible && <Alert onClick={()=>this.setState({visible:false})}>New Alert</Alert>}
        <Buttons color="secondary" onClick={this.handleButtonClick}/>
      </div>
    );
  }
}

