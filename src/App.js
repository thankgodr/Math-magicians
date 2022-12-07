import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NAVIGATIONPATH from './common/routepaths';
import CalculatorScreen from './components/CalculatorScreen';
import Header from './components/Header';
import Home from './components/Home';
import Quotes from './components/Quotes';

export default class App extends React.Component {
  #appclassName = 'App'

  render() {
    return (
      <div className={this.#appclassName}>
       <Header />
       <Routes>
          <Route path={NAVIGATIONPATH.HOME} element={<Home />} />
          <Route path={NAVIGATIONPATH.CALCULATOR} element={<CalculatorScreen/>} />
          <Route path={NAVIGATIONPATH.QUOTES} element={<Quotes />} />
       </Routes>

      </div>
    );
  }
}
