
let scrollWindowBy =(x=0, y=100)=>{
    setTimeout(()=>{
        window.scrollBy({left: x, top: y, behavior: 'smooth',});
    })
}

class Todo{
    static createTodo(data){
        return Object.assign({}, data)
    }
    static createId(todos){
        if(!todos.length) return 1;
        let todo = todos.reduce((prev, cur)=> prev.id > cur.id ? prev : cur);
        return todo.id + 1;
    }
}
export {scrollWindowBy, Todo}






