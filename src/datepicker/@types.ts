type PresetLabel = 'Today' | 'Last Monday' | 'This Monday' | 'Custom' | 'Yesterday';

export interface PresetDate {
	label: PresetLabel;
	value: Date;
	activeIcon: string;
	inactiveIcon: string;
}

export interface AllPresetDates {
    keys: ['today', 'yesterday', 'thisMonday', 'lastMonday'];
    today: PresetDate;
    yesterday: PresetDate;
    thisMonday: PresetDate;
    lastMonday: PresetDate;
}

export interface DatepickerProps {
	date: { value: Date; label: PresetLabel };
	setDate: ({ value, label }: { value: Date; label: PresetLabel }) => void;
	show: boolean;
	setShow: (show: boolean) => void;
}

export interface PresetDatesProps {
	date: { value: Date; label: PresetLabel };
	setDate: ({ value, label }: { value: Date; label: PresetLabel }) => void;
	options: AllPresetDates;
}
