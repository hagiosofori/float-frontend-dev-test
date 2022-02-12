import React from 'react';
import './App.css';
import Datepicker from './datepicker';
import useCalendar from './hooks/useCalendar';
import Sidebar from './Sidebar';

function App() {
	const { show: showDatePicker, setShow, date, setDate } = useCalendar(); // todo: specify the types. either as props to the datepicker component, or as the return value of useCalendar

	return (
		<div className="App" style={{ display: 'flex' }}>
			<Sidebar />
			<div style={{ padding: '25px' }}>
				<header style={{ marginBottom: '55px' }}>
					<h3 style={{ textAlign: 'left' }}>Overview</h3>
				</header>

				<main>
					<Datepicker
						show={showDatePicker}
						setShow={setShow}
						date={date}
						setDate={setDate}
					/>
				</main>
			</div>
		</div>
	);
}

export default App;
