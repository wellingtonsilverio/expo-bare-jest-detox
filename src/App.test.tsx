import { render, screen } from '@testing-library/react-native';

import App from './App';

describe('<App />', () => {
  it('should App snapshot', () => {
    render(<App />);

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
