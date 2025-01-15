import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {styled} from '@mui/material/styles';
import {useEffect, useState} from 'react';
import ButtonGroup from '../../features/task-filters/TaskFilters';
import ControlledCheckbox from '../../shared/ui/checkbox/checkbox.tsx';
import styles from './TaskItem.module.scss';

const Item = styled(Paper)(({theme}) => ({
	backgroundColor: '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'left',
	overflowWrap: 'break-word',
	wordBreak: 'break-word',
	whiteSpace: 'normal',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginTop: '1px !important',
	color: theme.palette.text.secondary,
	...theme.applyStyles('dark', {
		backgroundColor: '#1A2027',
		borderBlockColor: '#EDEDED',
	}),
}));

interface BasicProps {
	tasks: string[];
}
interface Task {
	id: number;
	todo: string;
	userId: number;
	completed: boolean;
}

export default function BasicStack({tasks}: BasicProps) {
	const mapObject = tasks.map((task, index) => ({
		id: index,
		todo: task,
		userId: 1,
		completed: false,
	}));
	const [taskList, setTaskList] = useState(mapObject);
	const [filter, setFilter] = useState('All Tasks');
	console.log(taskList);
	
	const updateTaskList = (prevTasks: Task[]) => {
		const existingTaskIds = prevTasks.map(task => task.todo);
		const newTasks = mapObject.filter(task => !existingTaskIds.includes(task.todo));
		return [...prevTasks, ...newTasks];
	};
	
	useEffect(() => {
		setTaskList(prevTasks => updateTaskList(prevTasks));
	}, [tasks]);

	const onChangeClick = (i: number) => {
		setTaskList(prevTasks =>
			prevTasks.map(task => (task.id === i ? {...task, completed: !task.completed} : task)),
		);
	};

	const filters: Record<string, (task: Task) => boolean> = {
		Active: task => !task.completed,
		Completed: task => task.completed,
	};

	const filteredTasks = taskList.filter(task => filters[filter]?.(task) ?? true);

	return (
		<Box sx={{width: '75ch'}}>
			<Stack spacing={2}>
				{filteredTasks.map(task => (
					<Item key={task.id}>
						<div className={`${styles.root} ${task.completed ? styles.completed : ''}`}>
							{task.todo}
						</div>
						<ControlledCheckbox onClick={() => onChangeClick(task.id)} />
					</Item>
				))}
			</Stack>
			<div className={styles.group}>
				<ButtonGroup onFilterChange={setFilter} />
			</div>
		</Box>
	);
}
