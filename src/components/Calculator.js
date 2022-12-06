import { useState } from 'react';
import CalculatorButton from './CalculatorButton';
import ResultView from './ResultView';
import CalculatorFunction from './CalucalatorFunction';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, setObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const addMe = (num) => {
    const res = calculate(obj, num);
    setObj(res);
  };

  const resultFormater = () => {
    if (obj.next != null) {
      return obj.next;
    }
    if (obj.operation != null) {
      return obj.operation;
    }
    if (obj.total != null) {
      return obj.total;
    }
    return 0;
  };

  return (
    <div className='row calculator'>
      <ResultView result={resultFormater()} />
      <CalculatorFunction name={'AC'} className="col-md-3 btn_number" add={addMe} id={'ac'}/>
      <CalculatorFunction name={'+/-'} className="col-md-3 btn_number" add={addMe} id={'plusminus'} />
      <CalculatorFunction name={'%'} className="col-md-3 btn_number" add={addMe} id={'percent'}/>
      <CalculatorFunction name={'÷'} className="col-md-3 function" add={addMe} id={'divide'}/>
      <CalculatorButton name="7" add={addMe} />
      <CalculatorButton name="8" add={addMe}/>
      <CalculatorButton name="9" add={addMe}/>
      <CalculatorFunction name={'x'} add={addMe} id={'multiply'}/>
      <CalculatorButton name="4" add={addMe}/>
      <CalculatorButton name="5" add={addMe}/>
      <CalculatorButton name="6" add={addMe}/>
      <CalculatorFunction name={'-'} add={addMe} id={'minus'}/>
      <CalculatorButton name="1" add={addMe}/>
      <CalculatorButton name="2" add={addMe}/>
      <CalculatorButton name="3" add={addMe}/>
      <CalculatorFunction name={'+'} add={addMe} id={'plus'}/>
      <CalculatorButton name={'0'} className="col-md-6 btn_number" add={addMe}/>
      <CalculatorButton name="." className="col-md-3 btn_number " add={addMe} />
      <CalculatorFunction name={'='} className="col-md-3 function" add={addMe} id={'equal'}/>
    </div>
  );
};
export default Calculator;