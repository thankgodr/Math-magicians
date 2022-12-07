import renderer from 'react-test-renderer';
import { render, queryByAttribute } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CalculatorButton from '../components/CalculatorButton';

describe('Testing interaction and snaption of calculator button', () => {
  test('Calculator button snapshot', () => {
    const elem = renderer.create(<CalculatorButton />).toJSON();
    expect(elem).toMatchSnapshot();
  });

  test('Button is clickable', () => {
    let count = 0;
    const res = () => { count += 1; };
    const dom = render(<CalculatorButton name="2" add={res} clclassName = "tess" />);
    const getById = queryByAttribute.bind(null, 'id');
    const first = getById(dom.container, '2');
    userEvent.click(first);
    userEvent.click(first);
    expect(count).toBe(2);
  });
});