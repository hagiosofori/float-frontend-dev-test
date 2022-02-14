import { useEffect, useState } from 'react';
import { DatepickerProps } from '../datepicker/@types';
import presetDates from '../datepicker/constants';

export default function useCalendar(): DatepickerProps {
	const [date, setDate] = useState({
		label: presetDates.today.label,
		value: presetDates.today.value,
	});
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
