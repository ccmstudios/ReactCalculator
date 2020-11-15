import React from 'react';
import '../assets/css/calculator.css'

class Button extends React.Component {
isOperator = val => { 
return !isNaN(val) || val === "." || val === "=";
};
    render(){
        return(
            <div className={ `button ${this.isOperator(this.props.children) ? "" : "operator"}`}
            onClick={() =>this.props.handleClick(this.props.children)}>
{this.props.children}

            </div>
        )
        
    }
}

export default Button;