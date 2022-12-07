import renderer from 'react-test-renderer';
import CalculatorScreen from '../components/CalculatorScreen';

describe('Testing snapshot of CalculatorScreen', () => {
  test('Snapshot of CalculatorScreen view', () => {
    const elem = renderer.create(<CalculatorScreen />).toJSON();
    expect(elem).toMatchSnapshot();
  });
});
