import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
	name : "todo",
	initialState,
	reducers: {
		addTasks: (state, action) => {
			state.todos.push({
				id : Date.now(),
				text: action.payload,
				completed : true
			});
		},
		deleteTasks : (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload)
		},
		toggleTasks : (state, action) => {
			const todo = state.todos.find((todo) => todo.id === action.payload)
			if(todo){
				todo.completed  = !todo.completed
			}
		},
	}
})


export const { addTasks, deleteTasks, toggleTasks } = todoSlice.actions;
export default todoSlice.reducer;