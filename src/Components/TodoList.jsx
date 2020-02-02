import React, { Component } from "react";
import Item from "./TodoItems";
export default class TodoList extends Component {
  render() {
    return (
      <section>
        <h1>Todo list</h1>
        <Item />
      </section>
    );
  }
}
