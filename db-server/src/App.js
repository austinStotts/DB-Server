import React, { Component } from 'react';
// import Axios from 'axios';
import './App.css';

import DisplayArea from './components/DisplayArea';
import SelectAll from './components/SelectAll';
import CustomQuery from './components/CustomQuery';
import Search from './components/search';

import Break from './components/break';

class App extends Component {
  constructor () {
    super();

    this.state = {
      displayString: '',
      displayStyles: {}
    }

    this.updateState = this.updateState.bind(this);
  }

  updateState (pair) {
    this.setState( pair, () => {
      console.log(`state was updated`);
    })
  }

  render () {
    return (
      <div className="App">
        <h1 className='title'>Steve's Super Duper Database Machine</h1>
        <DisplayArea styles={this.state.displayStyles} data={this.state.displayString}/>
        <SelectAll updateState={this.updateState}/>
        <Break />
        <CustomQuery updateState={this.updateState}/>
        <Break />
        <Search updateState={this.updateState}/>
      </div>
    );
  }
}

export default App;
