import renderer from 'react-test-renderer';
import ResultView from '../components/ResultView';

describe('Testing snapshot of resultView', () => {
  test('Snapshot of result view', () => {
    const elem = renderer.create(<ResultView />).toJSON();
    expect(elem).toMatchSnapshot();
  });
});