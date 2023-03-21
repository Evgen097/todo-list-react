import React, {useState} from 'react';

import AddTodo from "../AddTodo/AddTodo";
import Todos from "./Todos";
import { useSelector, useDispatch } from 'react-redux'

import {addTodo, removeTodo, changeTodo} from "../../store/todoSlice";
import {scrollWindowBy, Todo} from "../../utils/utils";


const TodosContainer = () => {
    let todos = useSelector((state) => state.todosPage.todos)
    const dispatch = useDispatch();

    let handleInputChange = (id, prop, payload)=>{
        dispatch(changeTodo({id, prop, payload}));
    }
    let addNewTodo = (text)=> {
        let todo = Todo.createTodo({id: Todo.createId(todos), text: text, finished: false});
        dispatch(addTodo( todo ));
        scrollWindowBy();
    }
    let handleRemoveTodo = (id)=> {
        dispatch(removeTodo(id))
    }
    return (
        <div className={'container'}>
            <h1>Todo list</h1>
            <Todos todos={todos} handleInputChange={handleInputChange} handleRemoveTodo={handleRemoveTodo}></Todos>
            <AddTodo addNewTodo={addNewTodo}></AddTodo>
        </div>
    );
};

export default TodosContainer;