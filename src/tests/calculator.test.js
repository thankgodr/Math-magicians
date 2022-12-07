import { render, queryByAttribute } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

describe('Testing the calculator printed on the dom', () => {
  let dom = null;
  let getById = null;
  beforeEach(() => {
    dom = render(<Calculator/>);
    getById = queryByAttribute.bind(null, 'id');
  });
  test('Testing random number between 0-9 exit in dom', async () => {
    const resultElement = getById(dom.container, `${Math.floor(Math.random() * 10)}`);
    expect(resultElement).toBeInTheDocument();
  });
  test('Testing plus in dom', async () => {
    const resultElement = getById(dom.container, 'plus');
    expect(resultElement).toBeInTheDocument();
  });

  test('Testing minus in dom', async () => {
    const resultElement = getById(dom.container, 'minus');
    expect(resultElement).toBeInTheDocument();
  });

  test('Testing divide in dom', async () => {
    const resultElement = getById(dom.container, 'divide');
    expect(resultElement).toBeInTheDocument();
  });

  test('Testing equal in dom', async () => {
    const resultElement = getById(dom.container, 'equal');
    expect(resultElement).toBeInTheDocument();
  });
});

describe('Testing the calculator click', () => {
  let dom = null;
  let getById = null;
  beforeEach(() => {
    dom = render(<Calculator/>);
    getById = queryByAttribute.bind(null, 'id');
    userEvent.click(getById(dom.container, 'ac'));
  });
  test('Testing random number is clicking', async () => {
    const random = Math.floor(Math.random() * 10);
    const random2 = Math.floor(Math.random() * 10);
    const first = getById(dom.container, `${random}`);
    const second = getById(dom.container, `${random2}`);
    const resultView = getById(dom.container, 'resultview');
    userEvent.click(first);
    userEvent.click(second);
    expect(resultView).toHaveTextContent(`${parseInt(`${random}${random2}`, 10)}`);
  });

  test('Testing calculator addtion', async () => {
    const first = getById(dom.container, '2');
    const second = getById(dom.container, '5');
    const plus = getById(dom.container, 'plus');
    const equal = getById(dom.container, 'equal');
    const resultView = getById(dom.container, 'resultview');
    userEvent.click(first);
    userEvent.click(plus);
    userEvent.click(second);
    userEvent.click(equal);
    expect(resultView).toHaveTextContent(7);
  });

  test('Testing calculator Minus', async () => {
    const first = getById(dom.container, '9');
    const second = getById(dom.container, '5');
    const minus = getById(dom.container, 'minus');
    const equal = getById(dom.container, 'equal');
    const resultView = getById(dom.container, 'resultview');
    userEvent.click(first);
    userEvent.click(minus);
    userEvent.click(second);
    userEvent.click(equal);
    expect(resultView).toHaveTextContent(4);
  });
});

describe('Testing SnapShot', () => {
  test('It should render all calculator view', () => {
    const elem = renderer.create(<Calculator />).toJSON();
    expect(elem).toMatchSnapshot();
  });
});