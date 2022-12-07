import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '../components/Header';

describe('Testing snapshot of Header', () => {
  test('Snapshot of Header view', () => {
    const elem = renderer
      .create(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
