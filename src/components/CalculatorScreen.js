import Calculator from './Calculator';

const CalculatorScreen = () => (
        <div className="row m-5">
            <div className="col-md-6">
                <h3>Lets do some Math!</h3>
            </div>
            <div className="col-md-6">
                <Calculator/>
            </div>
        </div>
);

export default CalculatorScreen;