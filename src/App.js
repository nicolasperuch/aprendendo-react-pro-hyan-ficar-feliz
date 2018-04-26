
import React, { Component } from 'react';
import injectSheet from 'react-jss'
import './App.css';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { ContentTable } from './components/ContentTable';
import { Footer } from './components/Footer';
import Teste from './components/Teste';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
            value: '',
            list: [],
            outputList: '',
            newBgPosition: 0
          };
  }

  shouldMoveFooterForward(value) {
    return this.state.value < value
  }

  handleChange(value) {
    this.shouldMoveFooterForward(value) ? this.moveFooter(1) : this.moveFooter(-1)
    this.setState({value});
  }

  moveFooter(displacement){
    this.setState({newBgPosition: this.state.newBgPosition + displacement})
  }

  handleSubmit(value) {
    this.state.list.push(this.state.value)
    this.setState({
            outputList: this.updateList()
          })
    document.querySelector('#contentTable').style.display = 'block'
  } 
  
  handleReset() {
    this.setState({
            value: '',
            outputList: '',
            list: []
          })
    document.querySelector('#contentTable').style.display = 'none'
 }

  updateList() {
    let listItens = this.state.list.map((item) =>
      <tr><td>{item}</td></tr>
    );
    return (listItens);
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
            <div id="contentTable">
              <Teste />
              <ContentTable itens={this.state.outputList}/>
            </div>
        </section>
        <footer id="footer" className="img-footer footer" style={{backgroundPosition: this.state.newBgPosition}}>
            <Footer/>
        </footer>
      </div>
    )
  }
}

export default App;
