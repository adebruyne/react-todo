import React, { Component } from "react";

function TodoForm(props) {
  <form onSubmit={props.onSubmit}>
    <input
      value={props.term}
      onChange={props.onChange}
      placeholder="Enter Todo"
    />
    <button type="submit">add</button>
  </form>;
}

export default TodoForm;
