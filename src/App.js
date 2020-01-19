import "@fortawesome/fontawesome-free/css/all.min.css";
import React, {Component} from 'react';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import TodoInput from "./components/todoInput/TodoInput";
import TodoList from './components/todoList/TodoList';

class App extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <TodoInput />
                        <TodoList />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

