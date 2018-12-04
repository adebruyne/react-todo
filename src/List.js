import React from "react";

const List = props => {
  return (
    <ul>
      {props.items.map((item, index) => {
        return (
          <li
            key={index}
            className="single-todo"
            onClick={() => {
              console.log("you flicked!");
              props.handleClick(index);
            }}
            //alternately you can write your onClick like this
            //onClick = {props.handleClick.bind(null, index)}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
