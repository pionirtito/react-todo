import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, markTodo, deleteTodo}) => {//todos iz prosledjenog propsa
    const allTodos = todos.map((todo, index)=>{// index kao drugi parametar u map-u dvraca index elementa niza ... ovo nam koristi z aredni br kartice..0,1..
        return (
            <Todo todo={todo} key={todo.id} index={index} markTodo={markTodo} deleteTodo={deleteTodo}/>
        )
    })
    return (
        <div className="container">
            <div className="row">
                {allTodos}
            </div>
        </div>
    )
}

export default TodoList;