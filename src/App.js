import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

export default class App extends React.Component {
  #appclassName = 'App'

  render() {
    return (
      <div className={this.#appclassName}>
      <Calculator />
      </div>
    );
  }
}
