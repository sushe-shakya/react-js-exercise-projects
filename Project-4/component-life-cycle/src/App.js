import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (<div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h2>Components life cycle</h2>
      </div>
    <Body/>
    </div>);
  }
}


class Body extends Component {

  constructor(props){
    super(props)

    this.state = {r:0}
    this.getRandomNumber = this.getRandomNumber.bind(this)
  }
  getRandomNumber(){
    console.log("Random number called");
    this.setState({r:Math.floor(Math.random()*10)});
  }
  render(){
    return(
      <div>
        <p className="App-intro">
          To get started, edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <button onClick={this.getRandomNumber}>Random number</button>
        <Numbers myNumber ={this.state.r}/>
      </div>
    );
  }
}

class Numbers extends Component {
  componentWillMount(){
    console.log("componentWillMount was called")
  }

  componentDidMount(){
    console.log("componentDidMount was called")
  }

  componentWillReceiveProps(newProps){
    console.log("componentWillReceiveProps was called")
  }
  render(){
    return(
      <div>
        <br />{this.props.myNumber}
      </div>
    );
  }
}
export default App;
