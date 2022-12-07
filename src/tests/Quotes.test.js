import renderer from 'react-test-renderer';
import Quotes from '../components/Quotes';

describe('Testing snapshot of resultView', () => {
  test('Snapshot of result view', () => {
    const elem = renderer.create(<Quotes />).toJSON();
    expect(elem).toMatchSnapshot();
  });
});