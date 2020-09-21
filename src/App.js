import React, { Component } from 'react';
import Jumbotron from "./components/Jumbotron"
import NewTodo from "./components/NewTodo"
import TodoList from "./components/TodoList"
import "./App.css"


class App extends Component {
    state = {
        todos: [
        
        ]
    }

    componentDidMount(){
        // console.log("Component Mount");
        let data = [];
        if(localStorage.data){
            data = JSON.parse(localStorage.data)
        }
        this.setState({
            todos:data // ako nema data u local storage
        })
    }

    // componentDidUpdate(){
    //     console.log("Update");
    // }

    addIntoTodos = (todo) => { // prima todo => ova metoda mora da se prosledi u NewTodo
        // console.log(todo);
        todo.id = Math.floor(Math.random()*(10000-10)-10);
        localStorage.data = JSON.stringify([...this.state.todos,todo])
        this.setState({todos:[...this.state.todos,todo]})
    }
    

    markTodo = (index) => {
        // console.log(index);
        const copyTodos = [...this.state.todos];
        copyTodos[index].done = !copyTodos[index].done; // samo menja t/f
        localStorage.data = JSON.stringify(copyTodos);
        this.setState({todos:copyTodos}) // menja state !!!
    }

    deleteTodo = (index) => {
        // console.log(index);
        const copyTodos = [...this.state.todos];
        copyTodos.splice(index,1); // koji index i koliko elemenata brismeo
        localStorage.data = JSON.stringify(copyTodos);
        this.setState({todos:copyTodos});
    }

    render() {
        return (
            <div className="wrapp">
                <Jumbotron />
                <NewTodo addIntoTodos={this.addIntoTodos} />
                <TodoList todos={this.state.todos} markTodo={this.markTodo} deleteTodo={this.deleteTodo} />

            </div>
        );
    }
}

export default App;