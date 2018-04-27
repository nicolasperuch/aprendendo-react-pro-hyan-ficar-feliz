
import React, { Component } from 'react';
import injectSheet from 'react-jss'
import './App.css';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { ContentTable } from './components/ContentTable';
import { Footer } from './components/Footer';
import Teste from './components/Teste';
import axios from 'axios'



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
            value: '',
            responseList: [],
            outputList: '',
            newBgPosition: 0,
            opacityLevel: 0.3
        };
  }

  isTiping(value) {
    return this.state.value < value
  }

  handleChange(value) {
    this.isTiping(value) ? this.changeFooterOpacity(0.01) : this.changeFooterOpacity(-0.01)
    this.setState({value})
    this.getData(value)
  }

  getData(value){
      this.resetResponseList()
      return axios
              .get('http://localhost:8080/getDataByName/' + value)
              .then(response => {
                      response.data.map((r) => 
                        this.state.responseList.push(r.city)
                      )
                      this.setState({
                        outputList: this.updateList()
                      })
                    }
              );
  }

  resetResponseList(){
    this.setState({
      responseList: []
    })
  }

  changeFooterOpacity(value){
    this.setState({opacityLevel: this.state.opacityLevel + value})
  }

  resetFooterOpacity(){
    this.setState({opacityLevel: 0.3})
  }

  updateList() {
    let listItens = this.state.responseList.map((item) =>
      <tr>
        <td>{item.nome}</td>
        <td>{item.populacao}</td>
      </tr>
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
            <Button handleClick={this.resetFooterOpacity.bind(this)} name='Reset Opacity' />
        </section>
        <section className="center table">
            <div id="contentTable">
              <ContentTable itens={this.state.outputList}/>
            </div>
        </section>
        <footer id="footer" className="img-footer footer" 
                style={{
                    opacity: this.state.opacityLevel
                    }}>
            <Footer/>
        </footer>
      </div>
    )
  }
}

export default App;
