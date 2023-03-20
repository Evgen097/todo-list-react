import React from 'react';
import Todo from "../Todo/Todo";
import './todos.styles.css'

const Todos = (props) => {
    return (
            <div className={'todos'}>
                {props.todos.map((elem, key) => <Todo
                    todo={elem}
                    handleInputChange={props.handleInputChange}
                    removeTodo = {props.removeTodo}
                    key={key} />)}
            </div>
    );
};

export default Todos;










