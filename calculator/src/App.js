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
  
  clearInput = () => {
  this.setState({input: ""})
  };
  
    addZeroToInput = val => {
      // if this.state.input is not empty then add zero
      if (this.state.input !=="") {
        this.setState({input: this.state.input + val})
      };
    }
addDecimal = val => {
  // only add decimal if there is no decimal point present in the input area
  if(this.state.input.indexOf(".") === -1){
    this.setState({input: this.state.input + val})
  }
}

add = ()=> {
  this.state.PreviousNumber = this.state.input;
  this.setState({input: ""});
  this.state.operator = "plus";
}

minus = ()=> {
  this.state.PreviousNumber = this.state.input;
  this.setState({input: ""});
  this.state.operator = "subtract";
}
divide = ()=> {
  this.state.PreviousNumber = this.state.input;
  this.setState({input: ""});
  this.state.operator = "divide";
}
multiply = ()=> {
  this.state.PreviousNumber = this.state.input;
  this.setState({input: ""});
  this.state.operator = "multiply";
}
evaluate = ()=> {
 this.state.currentNumber =this.state.input;


if (this.state.operator == "plus"){

  this.setState({input: ""});
  this.setState({
    input: parseInt(this.state.PreviousNumber) + parseInt(this.state.currentNumber)
  })

}
else if (this.state.operator == "minus"){

  this.setState({input: ""});
  this.setState({
    input: parseInt(this.state.PreviousNumber) - parseInt(this.state.currentNumber)
  })
}
  else if (this.state.operator == "multiply"){

    this.setState({input: ""});
    this.setState({
      input: parseInt(this.state.PreviousNumber) * parseInt(this.state.currentNumber)
    })
  }
    else if (this.state.operator == "divide"){

      this.setState({input: ""});
      this.setState({
        input: parseInt(this.state.PreviousNumber) / parseInt(this.state.currentNumber)
      })
  }

  render()
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
  <Button handleClick={this.addToInput}>8</Button>
  <Button handleClick={this.addToInput}>9</Button>
  <Button handleClick={this.divide}>/</Button>
</div>
<div className='row'>
<Button handleClick={this.addToInput}>4</Button>
  <Button handleClick={this.addToInput}>5</Button>
  <Button handleClick={this.addToInput}>6</Button>
  <Button handleClick={this.multiply}>*</Button>
</div>
<div className='row'>
<Button handleClick={this.addToInput}>1</Button>
  <Button handleClick={this.addToInput}>2</Button>
  <Button handleClick={this.addToInput}>3</Button>
  <Button handleClick={this.add}>+</Button>
</div>
<div className='row'>
<Button handleClick={this.addDecimal}>.</Button>
  <Button handleClick={this.addZeroToInput}>0</Button>
  <Button handleClick={this.evaluate}>=</Button>
  <Button handleClick={this.minus}>-</Button>
</div>
<div className='row'>
<Clear handleClear ={this.clearInput}>CLEAR</Clear>
</div>
      </div>
      <h4>Let's Do Some Math</h4>
       <button className='clickme'>Click me!</button>
    </div>
  );
  };  
}

export default App;