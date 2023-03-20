import React, {useState} from 'react';
import Todo from "../Todo/Todo";
import AddTodo from "../AddTodo/AddTodo";
import Todos from "./Todos";

let todosCollection = [
    {id: 0, text: 'buy bread', finished: false},
    {id: 1, text: 'go to work', finished: false},
    {id: 2, text: 'watch film', finished: true},
];

const TodosContainer = () => {
    let [todos, setTodos] = useState(todosCollection)
    let handleInputChange = (id, prop, payload)=>{
        todos = todos.map(elem => {
            if(elem.id === id) elem[prop] = payload;
            return elem;
        });
        setTodos([...todos])
    }
    let addNewTodo = (text)=> {
        let maxId = ()=> {
            if(!todos.length) return 1;
            let todo = todos.reduce((prev, cur)=> prev.id > cur.id ? prev : cur);
            return todo.id + 1;
        }
        let todo =   {id: maxId(), text: text, finished: false};
        todos.push(todo)
        setTodos([...todos])
        setTimeout(()=>{
            window.scrollBy({
                left: 0, // на какое количество пикселей прокрутить вправо от текущей позиции
                top: 100, // на какое количество пикселей прокрутить вниз от текущей позиции
                behavior: 'smooth', // определяет плавность прокрутки: 'auto' - мгновенно (по умолчанию), 'smooth' - плавно
            });
        })
    }
    let removeTodo = (id)=> {
        todos = todos.filter(elem => elem.id !== id);
        setTodos(todos)
    }
    return (
        <div className={'container'}>
            <h1>Todo list</h1>
            <Todos todos={todos} handleInputChange={handleInputChange} removeTodo={removeTodo}></Todos>
            <AddTodo addNewTodo={addNewTodo}></AddTodo>
        </div>
    );
};

export default TodosContainer;