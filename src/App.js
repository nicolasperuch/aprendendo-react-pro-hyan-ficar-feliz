
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
            newBgPosition: 0,
            newOpacity: 0.3
          };
  }

  isTiping(value) {
    return this.state.value < value
  }

  handleChange(value) {
    this.isTiping(value) ? this.changeFooterOpacity(0.01) : this.changeFooterOpacity(-0.01)
    this.setState({value});
  }

  moveFooter(displacement){
    this.setState({newBgPosition: this.state.newBgPosition + displacement})
  }

  changeFooterOpacity(value){
    this.setState({newOpacity: this.state.newOpacity + value})
  }

  resetOpacity(){
    this.setState({newOpacity: 0.3})
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
            <Button handleClick={this.resetOpacity.bind(this)} name='Reset Opacity' />
        </section>
        <section className="center table">
            <div id="contentTable">
              <ContentTable itens={this.state.outputList}/>
            </div>
        </section>
        <footer id="footer" className="img-footer footer" 
                style={{
                    backgroundPosition: this.state.newBgPosition,
                    opacity: this.state.newOpacity
                    }}>
            <Footer/>
        </footer>
      </div>
    )
  }
}

export default App;
