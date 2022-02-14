import previousMonday from 'date-fns/previousMonday';
import subDays from 'date-fns/subDays';
import nextMonday from 'date-fns/nextMonday';
import { AllPresetDates } from './@types';

const presetDates: AllPresetDates = {
	keys: ['today', 'yesterday', 'thisMonday', 'lastMonday'],
	today: {
		label: 'Today',
		value: new Date(),
		activeIcon: '/icons/today-active.svg',
		inactiveIcon: '/icons/today-inactive.svg',
	},
	yesterday: {
		label: 'Yesterday',
		value: subDays(new Date(), 1),
		activeIcon: '/icons/yesterday-active.svg',
		inactiveIcon: '/icons/yesterday-inactive.svg',
	},
	thisMonday: {
		label: 'This Monday',
		value: nextMonday(new Date()),
		activeIcon: '/icons/this-monday-active.svg',
		inactiveIcon: '/icons/this-monday-inactive.svg',
	},
	lastMonday: {
		label: 'Last Monday',
		value: previousMonday(new Date()),
		activeIcon: '/icons/last-monday-active.svg',
		inactiveIcon: '/icons/last-monday-inactive.svg',
	},
};

export default presetDates;
