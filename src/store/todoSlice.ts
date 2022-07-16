import {createSlice} from "@reduxjs/toolkit";

type StateType = {
    id: number
    title: string
    completed: boolean
}
const todoSlice = createSlice({
    name: "todos",
    initialState: [{
        id: 0,
        title: "Title"
    }],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload,
                completed: false
            }
            state.push(newTodo)
        },
        deleteTodo: (state, action) => {
            return state.filter(elem => elem.id !== action.payload)
        }
    },

})

export const {addTodo, deleteTodo} = todoSlice.actions

export default todoSlice.reducer