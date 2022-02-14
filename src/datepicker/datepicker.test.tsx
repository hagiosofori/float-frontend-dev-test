/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */

import { render, screen } from '@testing-library/react';
import presetDates from './constants';
import App from '../App';
import { determineSelectedDateLabel } from './index';
import addDays from 'date-fns/addDays';
import format from 'date-fns/format';

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

	presetDates.keys.forEach((presetDateKey) => {
		const each = presetDates[presetDateKey];

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

		it(`should select the ${each.label} preset date when the correct date is selected`, () => {
			const { container } = setupApp();
            const ariaLabel = format(each.value, 'd MMMM yyyy')
			const dateTile: HTMLElement | null = container.querySelector(
				`[aria-label="${ariaLabel}"]`
			);
            const _dateTile = screen.getByText(each.value.getDay())
            console.log('value of date tile -> ', {dateTile, ariaLabel, _dateTile});
			dateTile?.click();
			expect(screen.getByRole('textbox')).toHaveDisplayValue(each.label);
		});

		it(`should return the correct label when given the correct date`, () => {
			expect(determineSelectedDateLabel(each.value)).toBe(each.label);
		});
	});

	it('should return "Custom" when no preset label is found', () => {
		expect(determineSelectedDateLabel(addDays(new Date(), 1))).toBe('Custom');
	});
});
