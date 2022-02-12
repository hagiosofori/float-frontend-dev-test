export default function Sidebar() {
	return (
		<div
			style={{
				maxWidth: '260px',
				width: '20vw',
				padding: '37px 25px',
				background: '#F9F9F8',
				minHeight: '100vh',
			}}
		>
			{' '}
			{/**the sidebar component */}
			{/* //todo: is there a better way to present this side bar, than a div? */}
			{/* //todo: hide on mobile. replace with a hamburger menu that opens and closes the sidebar */}
			<div style={{ display: 'flex' }}>
				<div
					style={{
						background: '#E3E3E0',
						borderRadius: '50%',
						width: '40px',
						height: '40px',
					}}
				>
					circle placeholder
				</div>
				<div style={{ background: '#E3E3E0' }}>user name and desc placeholder</div>
			</div>
		</div>
	);
}
