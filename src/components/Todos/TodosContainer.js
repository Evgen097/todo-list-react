import React, {useEffect} from 'react';

import AddTodo from "../AddTodo/AddTodo";
import Todos from "./Todos";
import { useSelector, useDispatch } from 'react-redux'

import {
    addTodo,
    removeTodo,
    changeTodo,
    fetchTodos,
    addTodoThunk,
    removeTodoThunk,
    editTodoThunk
} from "../../store/todoSlice";
import {scrollWindowBy, Todo} from "../../utils/utils";
import Preloader from "../Preloader/Preloader";


const TodosContainer = () => {
    let todos = useSelector((state) => state.todosPage.todos);
    let status = useSelector((state) => state.todosPage.status)

    const dispatch = useDispatch();

    useEffect(()=>{
        console.log('use effect')
        dispatch(fetchTodos())
    }, [])

    let handleInputChange = (id, prop, payload)=>{
        dispatch(changeTodo({id, prop, payload}));
        dispatch(editTodoThunk( {id, prop, payload} ))
    }
    let addNewTodo = (text)=> {
        let todo = Todo.createTodo({id: Todo.createId(todos), text: text, finished: false});
        // dispatch(addTodo( todo ));
        dispatch(addTodoThunk(todo))
        scrollWindowBy();
    }
    let handleRemoveTodo = (id)=> {
        dispatch(removeTodo(id))
        dispatch(removeTodoThunk(id))
    }

    return (
        <div className={'container'}>
            <h1>Todo list</h1>
            <img src="src/pngtree.jpg" alt=""></img>

            {status === 'loading' ?
                <Preloader/>
                :
                <Todos todos={todos}
                       handleInputChange={handleInputChange}
                       handleRemoveTodo={handleRemoveTodo}/>
            }

            <AddTodo addNewTodo={addNewTodo}></AddTodo>
        </div>
    );
};

export default TodosContainer;