export interface PresetDate {
	label: string;
	value: Date;
	activeIcon: string;
	inactiveIcon: string;
}

export interface DatepickerProps {
	date: { value: Date; label: string };
	setDate: ({ value, label }: { value: Date; label: string }) => void;
	show: boolean;
	setShow: (show: boolean) => void;
}

export interface PresetDatesProps {
	date: { value: Date; label: string };
	setDate: ({ value, label }: { value: Date; label: string }) => void;
	options: PresetDate[];
}
