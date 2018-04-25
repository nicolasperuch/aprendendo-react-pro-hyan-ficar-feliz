import React, { Component } from 'react';

export class Button extends Component{
    
    handleChange(event) {
        const value =  event.target.value;
        this.props.handleClick(value);
    }

    render() {
        return (
            <button className="waves-effect waves-light btn-large basic-margin" 
                    onClick={this.handleChange.bind(this)}> 
                        {this.props.name}
                    </button>
        );
    }
}
