import { render } from '@testing-library/react';
import App from '../src/App';

describe('App component', () => {
	it('renders without crashing', () => {
		const { container } = render(<App />);
		expect(container).toMatchSnapshot();
	});
});
