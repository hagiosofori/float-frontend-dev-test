/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */

import { render, screen } from '@testing-library/react';
import presetDates from './constants';
import App from '../App';

describe('App - Datepicker', () => {
	function setupApp() {
		return render(<App />);
	}

	it('should toggle the calendar on/off when the input is clicked', () => {
		const { container } = setupApp();
		expect(container.querySelector('.react-calendar')).not.toBeInTheDocument();

		screen.getByTestId('input').click();
		expect(container.querySelector('.react-calendar')).toBeInTheDocument();

		screen.getByTestId('input').click();
		expect(container.querySelector('.react-calendar')).not.toBeInTheDocument();
	});

	presetDates.forEach((each) => {
		it(`should select the correct date on the calendar when the ${each.label} preset date is selected`, () => {
			const { container } = setupApp();
			screen.getByTestId('input').click();
			screen.getByText(each.label).click();

			const selectedDate = container.querySelector('.react-calendar__tile--active');
			expect(selectedDate).toHaveTextContent(each.value.getDate().toString());
		});

		it(`should set the input value to the label of the selected date when ${each.label} is selected`, () => {
			setupApp();
			screen.getByTestId('input').click();
			screen.getByText(each.label).click();
			const inputField = screen.getByRole('textbox');
			expect(inputField).toHaveDisplayValue(each.label);
		});
	});
});
