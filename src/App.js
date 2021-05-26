import React, { Component } from 'react';
import { WorldCurrencies } from './components';
import Loading from './components/Loading/Loading';
import { fetchCurrentRateData } from './api';
import styles from './App.module.css'

class App extends React.Component {
  state = {
    data: {},
  }

  

  render(){
    const data = this.state
    return(
      <div>
        <WorldCurrencies />
      </div>
    )
  }
}



export default App;
