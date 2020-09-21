import React from 'react'
import styles from "../css/Todo.module.css"

// Zasto moramo da marktodo metodu pravimo u app i prosledjujemo propse kroz lisu u todo???

const Todo = ({todo, index, markTodo, deleteTodo}) => {//iz propsa od todolist
    return (
        <div className="col-4">
            <div className="card text-center">
                <div className="card-header">
                    <h4>Todo: {index+1}</h4>
                </div>
                <div className="card-body">
                    <h3 className={todo.done ? "complete" : "incomplete"}>{todo.msg}</h3> {/* ternary operator !!! */}
                </div>
                <div className="card-footer">
                    <button onClick={()=>{deleteTodo(index)}} className="btn btn-danger float-left">Delete</button>
                    <button onClick={()=>{markTodo(index)}} className={styles.pink + " btn btn-float-right"}>Mark</button> {/* mora ovako preko AF i sa indexom da bi se obirsao todo od tacno tog indexa */}
                </div>
            </div>
        </div>
    )
}

export default Todo;