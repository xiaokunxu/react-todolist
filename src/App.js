import React, { Component } from 'react';
import logo from './logo.svg';
import 'normalize.css';
import './reset.css';
import './App.css';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newTodo: '',
            todoList: [

            ]
        }
    }
    render() {
        let todos = this.state.todoList.map((item, index) => {
            return ( <
                li key = { index } >
                <
                TodoItem todo = { item }
                /> < /
                li >
            )
        })
        console.log(todos)
        return ( <
            div className = "App" >
            <
            h1 > 我的待办 < /h1> <
            div className = "inputWrapper" >
            <
            TodoInput content = { this.state.newTodo }
            onSubmit = { this.addTodo.bind(this) }
            /> < /
            div > <
            ol > { todos } <
            /ol> < /
            div >
        )
    }
    addTodo() {
        console.log('我得添加一个 todo 了')
    }
}

export default App;