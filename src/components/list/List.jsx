import React from "react";
import Todo from "../todo/Todo";
import "./style.css";
import {useSelector} from "react-redux";

function List() {
  const todos = useSelector((state)=> state.todo.list);
  console.log(todos)

  return (
    <div className="list-container">
      <h2 className="list-title">It G Ma ☺︎!🫵</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (todo.isDone === false)
            return (
              <Todo
              key = {todo.id} 
                todo={todo}
              />
            );          
            })}
      </div>
      <h2 className="list-title">D🫥ne!👌</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (todo.isDone) 
            return (
              <Todo
              key = {todo.id} 
                todo={todo}
            
              />
              
            );
          
        })}
      </div>
    </div>
  );
}

export default List;
