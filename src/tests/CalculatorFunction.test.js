import renderer from 'react-test-renderer';
import { render, queryByAttribute } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CalculatorFunction from '../components/CalucalatorFunction';

describe('Testing interaction and snaption of calculator button', () => {
  test('Calculator function button snapshot', () => {
    const elem = renderer.create(<CalculatorFunction />).toJSON();
    expect(elem).toMatchSnapshot();
  });

  test('Button is clickable', () => {
    let count = 0;
    const res = () => { count += 1; };
    const dom = render(<CalculatorFunction name="+" add={res} clclassName = "tess" id="plus" />);
    const getById = queryByAttribute.bind(null, 'id');
    const first = getById(dom.container, 'plus');
    userEvent.click(first);
    userEvent.click(first);
    expect(count).toBe(2);
  });
});