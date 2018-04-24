
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
            value: '',
            list: [],
            outputList: ''
          };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit() {
    this.state.list.push(this.state.value)
    this.setState({
            outputList: this.updateList()
          })
  }
  
  handleReset() {
    this.setState({
            value: '',
            outputList: '',
            list: []
          })
 }

  updateList() {
     let listItens = this.state.list.map((item) =>
      <li key={item}>{item}</li>
    );
    return (
      <ul>{listItens}</ul>
    );
  }

  render() {
    return (     
      <div>
        <div>
          <div className="app center img-background">
            <div>
              <input className="width-size" placeholder="Search for your city" type="text" value={this.state.value} onChange={this.handleChange}/>
            </div>
          </div>
        </div>
        <div className="center">
          <button className="waves-effect waves-light btn-large basic-margin" onClick={this.handleSubmit}> Search </button>
          <button className="waves-effect waves-light btn-large basic-margin" onClick={this.handleReset}> Reset </button>
        </div>
        <div className="label">
          {this.state.outputList}
        </div>
      </div>
    )
  }
}

export default App;
