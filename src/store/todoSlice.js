import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
// First, create the thunk

export const fetchTodos = createAsyncThunk(
    'todosPage/fetchTodosStatus',
    async () => {
        const response = await fetch('https://63d29bfd1780fd6ab9c921ee.mockapi.io/todos')
        let json = response.json();
        return json
    }
)

export const addTodoThunk = createAsyncThunk(
    'todosPage/addTodosStatus',
    async (todo) => {
        let url = 'https://63d29bfd1780fd6ab9c921ee.mockapi.io/todos';
        let data = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(todo)
        }
        const response = await fetch(url, data)
        let json = response.json();
        return json
    }
)
// Delete	/tasks/{taskId}
export const removeTodoThunk = createAsyncThunk(
    'todosPage/removeTodosStatus',
    async (id) => {
        let url = `https://63d29bfd1780fd6ab9c921ee.mockapi.io/todos/${id}`;
        const response = await fetch(url, {method: 'delete'})
        let json = response.json();
        return json
    }
)
// PUT	/tasks/{taskId}
export const editTodoThunk = createAsyncThunk(
    'todosPage/editTodosStatus',
    async (data ) => {
        let url = `https://63d29bfd1780fd6ab9c921ee.mockapi.io/todos/${data.id}`;
        let prop = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({[data.prop]: data.payload})
        }
        const response = await fetch(url, prop)
        let json = response.json();
        return json
    }
)

const initialState = {
    todos: [
        // {id: 0, text: 'buy bread', finished: false},
        // {id: 1, text: 'go to work', finished: false},
        // {id: 2, text: 'watch film', finished: true},
    ],
    status: 'loading', //success, error,

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
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.status = 'loading';
        })
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.todos = action.payload;
            state.status = 'success';
        })
        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.status = 'error';
            console.log('error', action)
        })

        builder.addCase(addTodoThunk.pending, (state, action) => {
            // console.log('post todo')
        })
        builder.addCase(addTodoThunk.fulfilled, (state, action) => {
            state.todos.push(action.payload);
        })
        builder.addCase(addTodoThunk.rejected, (state, action) => {
            console.log('error', action)
        })

        builder.addCase(removeTodoThunk.pending, (state, action) => {
            // console.log('remove todo')
        })
        builder.addCase(removeTodoThunk.fulfilled, (state, action) => {
            // state.todos.push(action.payload);
            // console.log(action.payload)
            // state.todos = state.todos.filter(elem => elem.id !== action.payload.id);

        })
        builder.addCase(removeTodoThunk.rejected, (state, action) => {
            console.log('error', action)
        })

    },
})

// Action creators are generated for each case reducer function
export const {addTodo, removeTodo, changeTodo  } = todosSlice.actions

export default todosSlice.reducer