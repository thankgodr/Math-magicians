import React from 'react';
import CalculatorButton from './CalculatorButton';
import ResultView from './ResultView';
import CalculatorFunction from './CalucalatorFunction';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  render() {
    return (
            <div className='row calculator'>
               <ResultView result={this.state.result} />
               <CalculatorFunction name={'AC'} className="col-md-3 btn_number" />
               <CalculatorFunction name={'+/-'} className="col-md-3 btn_number" />
               <CalculatorFunction name={'%'} className="col-md-3 btn_number" />
               <CalculatorFunction name={'÷'} className="col-md-3 function"/>
               <CalculatorButton name={7} />
               <CalculatorButton name={8} />
               <CalculatorButton name={9} />
               <CalculatorFunction name={'x'} />
               <CalculatorButton name={4} />
               <CalculatorButton name={5} />
               <CalculatorButton name={6} />
               <CalculatorFunction name={'-'} />
               <CalculatorButton name={1} />
               <CalculatorButton name={2} />
               <CalculatorButton name={3} />
               <CalculatorFunction name={'+'} />
               <CalculatorButton name={0} className="col-md-6 btn_number" />
               <CalculatorFunction name={'.'} className="col-md-3 btn_number " />
               <CalculatorFunction name={'='} className="col-md-3 function" />
            </div>
    );
  }
}