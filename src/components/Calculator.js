import React from 'react';
import CalculatorButton from './CalculatorButton';
import ResultView from './ResultView';
import CalculatorFunction from './CalucalatorFunction';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.addMe = this.addMe.bind(this);
    this.resultFormater = this.resultFormater.bind(this);
  }

  addMe(num) {
    const res = calculate(this.state.obj, num);
    this.setState(
      {
        obj: res,
      },
    );
  }

  static padZero(num) {
    return num == null ? 0 : num;
  }

  resultFormater() {
    if (this.state.obj.total == null) {
      return Calculator.padZero(this.state.obj.next);
    }
    if (this.state.obj.operation == null) {
      return this.state.obj.total;
    }
    return Calculator.padZero(this.state.obj.next);
  }

  render() {
    return (
            <div className='row calculator'>
               <ResultView result={this.resultFormater()} />
               <CalculatorFunction name={'AC'} className="col-md-3 btn_number" add={this.addMe} id={'ac'}/>
               <CalculatorFunction name={'+/-'} className="col-md-3 btn_number" add={this.addMe} id={'plusminus'} />
               <CalculatorFunction name={'%'} className="col-md-3 btn_number" add={this.addMe} id={'percent'}/>
               <CalculatorFunction name={'÷'} className="col-md-3 function" add={this.addMe} id={'divide'}/>
               <CalculatorButton name="7" add={this.addMe} />
               <CalculatorButton name="8" add={this.addMe}/>
               <CalculatorButton name="9" add={this.addMe}/>
               <CalculatorFunction name={'x'} add={this.addMe} id={'multiply'}/>
               <CalculatorButton name="4" add={this.addMe}/>
               <CalculatorButton name="5" add={this.addMe}/>
               <CalculatorButton name="6" add={this.addMe}/>
               <CalculatorFunction name={'-'} add={this.addMe} id={'minus'}/>
               <CalculatorButton name="1" add={this.addMe}/>
               <CalculatorButton name="2" add={this.addMe}/>
               <CalculatorButton name="3" add={this.addMe}/>
               <CalculatorFunction name={'+'} add={this.addMe} id={'plus'}/>
               <CalculatorButton name={'0'} className="col-md-6 btn_number" add={this.addMe}/>
               <CalculatorButton name="." className="col-md-3 btn_number " add={this.addMe} />
               <CalculatorFunction name={'='} className="col-md-3 function" add={this.addMe} id={'equal'}/>
            </div>
    );
  }
}