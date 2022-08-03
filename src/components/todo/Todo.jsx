import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useDispatch } from "react-redux";
import {removelist, updatelist} from "../../redux/modules/todo"
function Todo({ todo }) {
  
const dispatch = useDispatch()
  return (
    <div className="todo-container" key = {todo.id} isdone = "false">
      <div>
        <h2 className="todo-title">{todo.title}</h2>
        <div>{todo.body}</div>
      </div>
      <div className="button-set">
        <button onClick={()=>dispatch(removelist(todo.id))}
          className="todo-delete-button button"
          
        >
          삭제하기
        </button>
        <button onClick={()=>dispatch(updatelist(todo.id))}
          className="todo-complete-button button"
         
        >
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
      <Link to={`/ViewDetails/${todo.id}`}>상세페이지</Link>
    </div>

  
  );
}

export default Todo;
