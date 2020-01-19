import React, {Component} from 'react';
import TodoItem from "../todoItem/TodoItem";

class TodoList extends Component {
    render() {
        return (
            <section>
                <h2>Todo list</h2>
                <TodoItem />
            </section>
        );
    }
}

export default TodoList;