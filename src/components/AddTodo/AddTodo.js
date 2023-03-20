import React, {useState} from 'react';
import './addtodo.style.css'

const AddTodo = ({addNewTodo}) => {
    let [text, setText] = useState('');
    let handleInputChange =(e)=> {
        setText(e.target.value)
    };
    let handleAddBtn = (e)=>{
        e.preventDefault();
        if(!text.length) return
        addNewTodo(text);
        setText('')
    }
    return (
        <div className="addtodo">
            <form className="addtodo_form">
                <input className="addtodo_input" type="text" placeholder="some text" value={text}
                       onChange={handleInputChange}
                ></input>
                    <button className="btn_add"
                            onClick={handleAddBtn}
                    >Add</button>
            </form>
        </div>
    );
};

export default AddTodo;