import React, { Component } from 'react'

class NewTodo extends Component {
    state = {
        msg: "",
        done: false
    }
    setNewMsg = (e) => {
        this.setState({
            msg: e.target.value
        })
    }
    addTodo = () => {
        // console.log(this.state)
        this.props.addIntoTodos(this.state);
        this.setState({msg:""}) // prazni polje nakon submita, ali mora da se i value inputa obrise ... to se radi u renderu dole
    }
    

    render() {
        return (
            <div className="container">
                <div className="row m-5">
                    <div className="col-8 offse-2">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="new msg" onChange={this.setNewMsg} value={this.state.msg} />
                            <div className="input-group-append">
                                <button onClick={this.addTodo} className="btn btn-primary">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewTodo;