import React, { Component } from "react";
import List from "./List";
import TodoForm from "./TodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: []
    };
  }
  render() {
    return (
      <div className="todo-container">
        <h1 className="title">Todo App</h1>
        <TodoForm
          onSubmit={this._onSubmit}
          term={this.state.term}
          onChange={event => this._onChange(event.target.value)}
        />

        <div>
          <List items={this.state.items} handleClick={this._deleteTodo} />
        </div>
      </div>
    );
  }

  _deleteTodo = indexToDelete => {
    this.setState({
      items: this.state.items.filter((item, index) => index !== indexToDelete)
    });

    // let itemsToKeep = [];
    // //keep all the items except the one at 'index'
    // this.state.items.forEach((item, index) => {
    //   if (index === indexToDelete) {
    //     console.log(`${indexToDelete}: delete it!`);
    //   } else {
    //     console.log(`${index}: keep it!`);
    //     itemsToKeep.push(item);
    //   }
    // });
    // this.setState({
    //   items: itemsToKeep
    // });
  };

  _onChange = userInput => {
    // const userInput = event.target.value;
    console.log(userInput);
    this.setState({
      term: userInput
    });
  };

  _onSubmit = event => {
    //puts on the brakes
    event.preventDefault();
    // console.log("submitted!");
    this.setState({
      term: "",
      items: [...this.state.items, this.state.term]
    });
  };
}

export default TodoList;
