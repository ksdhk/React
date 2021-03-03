import logo from "./logo.svg";
import "./App.css";
import react, {Component} from 'react';

class App extends Component{
  render(){
    const name = 'react';
    return <div className="react">{name}</div>
  }
}
export default App;
