import { Todo } from "@/@modules/todo";
import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
	initialState: [] as Todo[],
	name: "todo",
	reducers: {
		addTodo: (state, action) => {
			return [
				...state,
				{
					...action.payload,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			];
		},
		removeTodo: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload);
		},
		updateTodo: (state, action) => {
			return state.map((todo) => {
				if (todo.id === action.payload.id) {
					todo.title = action.payload.title;
					todo.description = action.payload.description;
					todo.updatedAt = new Date();
				}
				return todo;
			});
		},
		toggleTodo: (state, action) => {
			return state.map((todo) => {
				if (todo.id === action.payload.id) {
					todo.completed = !todo.completed;
					todo.updatedAt = new Date();
				}
				return todo;
			});
		},
		clearTodo: (state) => {
			return [] as Todo[];
		},
		allCompletedTodo: (state) => {
			return state.map((todo) => {
				todo.completed = true;
				todo.updatedAt = new Date();
				return todo;
			});
		},
		allUncompletedTodo: (state) => {
			return state.map((todo) => {
				todo.completed = false;
				todo.updatedAt = new Date();
				return todo;
			});
		},
	},
});

export const { addTodo, removeTodo, updateTodo, toggleTodo } =
	todoSlice.actions;
export default todoSlice.reducer;
