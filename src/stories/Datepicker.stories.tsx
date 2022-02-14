/* eslint-disable react-hooks/exhaustive-deps */
import Datepicker from '../datepicker/index';
import { DatepickerProps } from '../datepicker/@types';
import useCalendar from '../hooks/useCalendar';
import 'react-calendar/dist/Calendar.css';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { addDays } from 'date-fns';
import { useEffect } from 'react';
import presetDates from '../datepicker/constants';

export default {
	title: 'Float/Datepicker',
	component: Datepicker,
	argTypes: {
		date: {
			options: ['Today', 'Yesterday', 'This Monday', 'Last Monday'],
			mapping: {
				Today: presetDates.today,
				Yesterday: presetDates.yesterday,
				'This Monday': presetDates.thisMonday,
				'Last Monday': presetDates.lastMonday,
			},
			control: 'inline-radio',
		},
	},
	parameters: {
		actions: {
			handles: ['click'],
		},
	},
} as ComponentMeta<typeof Datepicker>;

const Template: ComponentStory<typeof Datepicker> = (args: DatepickerProps) => {
	const { setShow, setDate, date, show }: DatepickerProps = useCalendar();
	const { date: initialDate, show: initialShow } = args;
	useEffect(() => {
		setDate(initialDate);
		setShow(initialShow);
	}, [initialDate, initialShow]);

	return <Datepicker date={date} show={show} setShow={setShow} setDate={setDate} />;
};

export const HiddenCalendar = Template.bind({});
HiddenCalendar.args = {
	show: false,
	date: presetDates.today,
};

export const VisibleCalendarWithDefault = Template.bind({});
VisibleCalendarWithDefault.args = {
	show: true,
	date: presetDates.today,
};

export const YesterdaySelected = Template.bind({});
YesterdaySelected.args = {
	show: true,
	date: presetDates.yesterday,
};

export const ThisMondaySelected = Template.bind({});
ThisMondaySelected.args = {
	show: true,
	date: presetDates.thisMonday,
};

export const LastMondaySelected = Template.bind({});
LastMondaySelected.args = {
	show: true,
	date: presetDates.lastMonday,
};

export const CustomSelected = Template.bind({});
CustomSelected.args = {
	show: true,
	date: { label: 'Custom', value: addDays(new Date(), 1) },
};
