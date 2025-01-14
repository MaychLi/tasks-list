import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks } from './asyncAction';
import { Todo } from "./asyncAction";

interface TodosState {
	items: Todo[];
	status: 'success'
}
const initialState: TodosState = {
	items: [],
	status: 'success',
};

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchTasks.fulfilled, (state, action) => {
				state.status = 'success';
				state.items = action.payload;
			});
	},
});
export default todosSlice.reducer;
