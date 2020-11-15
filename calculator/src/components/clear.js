import React from 'react'
import '../assets/css/calculator.css'

class Clear extends React.Component{
    render(){
        return(
            <div className='clear'>
                {this.props.children}
            </div>
        )
    }
}

export default Clear;