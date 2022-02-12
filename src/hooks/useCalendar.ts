import { useState } from 'react';
import { DatepickerProps } from '../datepicker/@types';
import presetDates from '../datepicker/constants';

export default function useCalendar(): DatepickerProps {
	const [date, setDate] = useState({ label: presetDates[0].label, value: presetDates[0].value });
	const [show, setShow] = useState(false);

	return { date, setDate, show, setShow };
}
