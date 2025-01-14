import {createTheme, ThemeProvider} from '@mui/material/styles';
import {TaskList} from '../pages/task-list/TaskList';
import './scss/_all.scss';

const theme = createTheme();

const App = () => {
	return <ThemeProvider theme={theme}>{<TaskList />}</ThemeProvider>;
};
export default App;
