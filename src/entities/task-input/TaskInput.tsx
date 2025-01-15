import { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

interface addTaskProps {
	addTask: (task: string) => void;
}

export default function TextFieldHiddenLabel({ addTask }: addTaskProps) {
	const [value, setValue] = useState<string>('');

	const onChangeEvent = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter' && value) {
			event.preventDefault();
			addTask(value);
			setValue('');
		}
	};

	return (
		<Stack component='form' sx={{width: '75ch'}} spacing={2} noValidate autoComplete='off'>
			<TextField
				hiddenLabel
				id='filled-hidden-label-normal'
				defaultValue=''
				variant='filled'
				placeholder='What needs to be done?'
				value={value}
				onChange={e => setValue(e.target.value)}
				onKeyDown={onChangeEvent}
				sx={{
					'& .MuiInputBase-input': {
						color: '##00000099',
						backgroundColor: '#FEFEFE',
					},
					'& .MuiInputBase-input::placeholder': {
						color: '#E9E9E9',
					},
				}}
			/>
		</Stack>
	);
}
