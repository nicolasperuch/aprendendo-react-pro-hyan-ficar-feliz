
import React, { Component } from 'react';
import './App.css';
import { Input } from './components/Input';
import { Button } from './components/Button';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
            value: '',
            list: [],
            outputList: ''
          };
  }

  handleChange(value) {
    this.setState({value});
  }

  handleSubmit(value) {
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
      <tr><td>{item}</td></tr>
    );
    return (
      <table className="highlight centered responsive-table">
        <thead>
          <tr>
            <th>
              Nome
            </th>
          </tr>
        </thead>
        <tbody>
          {listItens}
        </tbody>
        </table>
    );
  }
  

  render() {
    return (     
      <div>
        <header>
          <div className="app center img-background">
              <Input handleChange={this.handleChange.bind(this)} value={this.state.value}/>
          </div>
        </header>
        <section className="center">
          <Button handleClick={this.handleSubmit.bind(this)} name='Search' />
          <Button handleClick={this.handleReset.bind(this)} name='Reset' />
        </section>
        <section className="center table">
            {this.state.outputList}
        </section>
        <footer>
          <label> TODO </label>
        </footer>
      </div>
    )
  }
}

export default App;
