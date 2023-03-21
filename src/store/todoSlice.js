import { createSlice } from '@reduxjs/toolkit';

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
            state.todos = state.todos.filter(elem => elem.id !== action.payload);
        },
        changeTodo: (state, action) => {
            let payload = action.payload;
            state.todos = state.todos.map(elem => {
                if(elem.id === payload.id) elem[payload.prop] = payload.payload;
                return elem;
            });
        },
    },
})

// Action creators are generated for each case reducer function
export const {addTodo, removeTodo, changeTodo  } = todosSlice.actions

export default todosSlice.reducer