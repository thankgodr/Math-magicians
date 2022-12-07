import renderer from 'react-test-renderer';
import Quotes from '../components/Quotes';

describe('Testing snapshot of quotesView', () => {
  test('Snapshot of quotes view', () => {
    const elem = renderer.create(<Quotes />).toJSON();
    expect(elem).toMatchSnapshot();
  });
});