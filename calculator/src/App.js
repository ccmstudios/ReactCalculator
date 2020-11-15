import React, {Component} from 'react'
import './assets/css/calculator.css'
import Button from './components/button'
import Input from './components/input'
import Clear from './components/clear'

class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      PreviousNumber: "",
      currentNumber: "",
      operator: ""
    };
  }
  addToInput= val => {
    this.setState({input: this.state.input + val});
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
       <h1>Calculator</h1>
      </header>
      <div className='calc-wrapper'>
        <div className='row'>
          <Input>{this.state.input}</Input>
        </div>
<div className='row'>
  <Button handleClick={this.addToInput}>7</Button>
  <Button>8</Button>
  <Button>9</Button>
  <Button>/</Button>
</div>
<div className='row'>
<Button>4</Button>
  <Button>5</Button>
  <Button>6</Button>
  <Button>*</Button>
</div>
<div className='row'>
<Button>1</Button>
  <Button>2</Button>
  <Button>3</Button>
  <Button>+</Button>
</div>
<div className='row'>
<Button>.</Button>
  <Button>0</Button>
  <Button>=</Button>
  <Button>-</Button>
</div>
<div className='row'>
<Clear>CLEAR</Clear>
</div>
      </div>
      <h4>Let's Do Some Math</h4>
       <button className='clickme'>Click me!</button>
    </div>
  );
}
}
export default App;