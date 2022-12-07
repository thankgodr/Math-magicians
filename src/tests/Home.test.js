import renderer from 'react-test-renderer';
import Home from '../components/Home';

describe('Testing snapshot of Home', () => {
  test('Snapshot of Home view', () => {
    const elem = renderer.create(<Home />).toJSON();
    expect(elem).toMatchSnapshot();
  });
});
