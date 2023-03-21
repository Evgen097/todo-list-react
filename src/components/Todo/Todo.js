import React from 'react';
import './todo.style.css';
let todos = [
    {id: 0, text: 'buy bread', finished: false},
    {id: 1, text: 'go to work', finished: false},
    {id: 2, text: 'watch film', finished: true},
];

let images = ["/images/free-icon-alarm-clock-9986729.png",
    "/images/free-icon-battery-9986689.png",
    "/images/free-icon-clock-9986914.png",
    "/images/free-icon-computer-9986778.png",
    "/images/free-icon-human-9986839.png",]


const Todo = ({todo, handleInputChange, handleRemoveTodo}) => {
    let imgSrc = ()=>{
        let num = Math.floor( Math.random()* images.length);
        return images[num]
    }
    return (
        <div className="todo">
            <form className="todoform">
                <div className="todo_image">
                    <img src={imgSrc()} alt=""></img>
                </div>
                <input className={todo.finished ? "todoinput checked" : "todoinput"}
                       type="text" placeholder="some value" value={todo.text}
                        onChange={(e)=> handleInputChange(todo.id, 'text', e.target.value)}
                ></input>

                    <div className="todo_checked"
                    onClick={(e)=>handleInputChange(todo.id, 'finished', !todo.finished)}>
                        <img src="/images/checked.png" alt=""></img>
                    </div>
                    <span className="btn_remove" onClick={(e)=> handleRemoveTodo(todo.id)}>
                    <img src="/images/remove.png" alt=""></img>
                </span>
            </form>
        </div>
    );
};

export default Todo;