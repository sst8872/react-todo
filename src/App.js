import "@fortawesome/fontawesome-free/css/all.min.css";
import React, {Component} from 'react';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import TodoInput from "./components/todoInput/TodoInput";
import TodoList from './components/todoList/TodoList';

class App extends Component {
   state = {
       items: [
           {id: 1, title: "wake up"},
           {id: 2, title: "make breakfast"}
       ],
       id: uuid(),
       item: '',
       editItem: false
   };
   handleChange = (e) => { console.log('handle change') };
   handleSubmit = (e) => { console.log('handle Submit') };
   clearList = () => { console.log('clear list') };
   handleDelete = (id) => { console.log(`delete ${id}`) };
   handleEdit = (id) => { console.log(`edit ${id}`) };

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-8 mt-5">
                            <h3 className="text-capitalize text-center">Todo Input</h3>
                            <TodoInput
                                item={this.state.item}
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                editItem={this.state.editItem}
                            />
                            <TodoList
                                items={this.state.items}
                                clearList={this.clearList}
                                handleDelete={this.handleDelete}
                                handleEidt={this.handleEdit}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

