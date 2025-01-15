import {useAppDispatch} from 'app/redux/hooks/hooks';
import {selectItems, selectStatus} from 'app/redux/selectors/selectors';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {fetchTasks} from '../../app/redux/tasks/asyncAction';
import TaskInput from '../../features/task-input/TaskInput';
import TaskItem from '../../entities/task-item/TaskItem';
import styles from './TaskList.module.scss';

export const TaskList: React.FC = () => {
	const dispatch = useAppDispatch();
	const jsonTodo = useSelector(selectItems);
	const jsonStatus = useSelector(selectStatus);
	const [tasks, setTasks] = useState<string[]>([]);

	const addTask = (task: string) => {
		setTasks(prevTasks => [...prevTasks, task]);
	};

	useEffect(() => {
		if (jsonStatus === 'success') {
			dispatch(fetchTasks());
		}
	}, [jsonStatus]);

	const combinedTasks = [...jsonTodo.map(todo => todo.todo), ...tasks];
	return (
		<div className='container'>
			<div className={styles.wrapper}>
				<main className={styles.taskWrapper}>
					<section className={styles.block}>
						<h1 className={styles.header}>todos</h1>
						<div>
							<TaskInput addTask={addTask} />
						</div>
						<ul>
							<li>
								<TaskItem tasks={combinedTasks} />
							</li>
						</ul>
					</section>
				</main>
			</div>
		</div>
	);
};
