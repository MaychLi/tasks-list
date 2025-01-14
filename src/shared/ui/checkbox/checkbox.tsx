import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

export default function ControlledCheckbox({onClick}: any) {
	const [checked, setChecked] = useState(false);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};

	return (
		<Checkbox
			checked={checked}
			onChange={handleChange}
			onClick={onClick}
			inputProps={{'aria-label': 'controlled'}}
		/>
	);
}
