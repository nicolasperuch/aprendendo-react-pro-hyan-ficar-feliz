import React, { Component } from 'react';

export class Input extends Component{
 
    handleChange(event) {
        const value =  event.target.value;
        this.props.handleChange(value)
    }

    render() {
        return (
            <div>
                <input className="width-size" placeholder="Search for your city" type="text" 
                       value={this.props.value} 
                       onChange={this.handleChange.bind(this)}/>
            </div>
        );
    }
}
