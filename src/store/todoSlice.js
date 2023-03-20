import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [
        {id: 0, text: 'buy bread', finished: false},
        {id: 1, text: 'go to work', finished: false},
        {id: 2, text: 'watch film', finished: true},
    ]
}

export const todosSlice = createSlice({
    name: 'todosPage',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(elem => elem.id !== action.id);
        },
        changeTodo: (state, action) => {
            state.todos = state.todos.map(elem => {
                if(elem.id === action.id) elem[action.prop] = action.payload;
                return elem;
            });
        },
    },
})

// Action creators are generated for each case reducer function
export const {addTodo, removeTodo, changeTodo  } = todosSlice.actions

export default todosSlice.reducer