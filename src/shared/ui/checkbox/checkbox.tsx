import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
interface ControlledCheckboxProps {
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function ControlledCheckbox({onClick}: ControlledCheckboxProps) {
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
