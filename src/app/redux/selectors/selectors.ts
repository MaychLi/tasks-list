import { RootState } from "../store";

export const selectItems = ((state: RootState) => state.todos.items);
export const selectStatus = ((state: RootState) => state.todos.status);