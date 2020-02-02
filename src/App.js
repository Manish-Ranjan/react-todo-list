import React, { Component } from 'react';

import Input from "./Components/TodoInput";
import List from "./Components/TodoList";
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';




export default class App extends Component {
  state = {
    items: [{ id: 1, title: "Wake me up" },
    { id: 2, title: "Breakfast" }],
    id: uuid(),
    item: "",
    editItem: false
  };
  handleChange = (e) => { }
  handleSubmit = (e) => { }
  clearList = () => { }
  handleDelete = (id) => { }
  handleEdit = () => { }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}


            />
          </div>

        </div>

      </div>
    )
  }
}
