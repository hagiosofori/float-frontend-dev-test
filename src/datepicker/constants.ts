import previousMonday from 'date-fns/previousMonday';
import subDays from 'date-fns/subDays';
import nextMonday from 'date-fns/nextMonday';
import { PresetDate } from './@types';

const presetDates: PresetDate[] = [
	{
		label: 'Today',
		value: new Date(),
		activeIcon: '/icons/today-active.svg',
		inactiveIcon: '/icons/today-inactive.svg',
	},
	{
		label: 'Yesterday',
		value: subDays(new Date(), 1),
		activeIcon: '/icons/yesterday-active.svg',
		inactiveIcon: '/icons/yesterday-inactive.svg',
	},
	{
		label: 'This Monday',
		value: nextMonday(new Date()),
		activeIcon: '/icons/this-monday-active.svg',
		inactiveIcon: '/icons/this-monday-inactive.svg',
	},
	{
		label: 'Last Monday',
		value: previousMonday(new Date()),
		activeIcon: '/icons/last-monday-active.svg',
		inactiveIcon: '/icons/last-monday-inactive.svg',
	},
	{
		label: 'Custom',
		value: new Date(),
		activeIcon: '/icons/custom-active.svg',
		inactiveIcon: '/icons/custom-inactive.svg',
	},
];

export default presetDates;