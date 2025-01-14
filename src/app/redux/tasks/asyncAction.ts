import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Todo {
	id: number;
	todo: string;
	completed: boolean;
	userId: number;
}

export const fetchTasks = createAsyncThunk(
  'task/fetchTasksStatus', 
  async () => {
    const response = await axios.get<{todos: Todo[]}>('https://dummyjson.com/todos');
    return response.data.todos.slice(0, 10);
  },
);