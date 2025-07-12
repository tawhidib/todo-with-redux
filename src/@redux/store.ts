import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slice/todo";

const store = configureStore({
	reducer: {
		todo: todoSlice,
	},
});

export default store;
