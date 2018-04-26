import React, { Component } from 'react';
import jss from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

const styles = {
  wrapper: {
    padding: 40,
    background: '#f7df1e',
    textAlign: 'center'
  },
  title: {
    font: {
      size: 40,
      weight: 900
    },
    color: '#24292e'
  }
}


const { classes } = jss.createStyleSheet(styles).attach()

export default class Teste extends Component{
    
    render() {
        return (
            <div className="${classes.wrapper}">
                <h1 className="${classes.title}">Hello JSS!</h1>
            </div>
        );
    }
}