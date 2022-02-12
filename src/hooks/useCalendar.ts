import { useEffect, useState } from 'react';
import { DatepickerProps } from '../datepicker/@types';
import presetDates from '../datepicker/constants';

export default function useCalendar(): DatepickerProps {
	const [date, setDate] = useState({ label: presetDates[0].label, value: presetDates[0].value });
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (!show) return;
		const eventHandler = () => {
			setShow(false);
		};
		document.addEventListener('click', eventHandler);

		return () => document.removeEventListener('click', eventHandler);
	}, [show]);

	return { date, setDate, show, setShow };
}
