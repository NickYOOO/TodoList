import React, { useState } from "react";
import "./style.css";
import {useDispatch} from "react-redux";
import {createlist} from "../../redux/modules/todo";
import { useRef } from "react";


function Form() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const [title, setTitle ] = useState("");
  const [body, setBody ] = useState("");
  const [id, setId] = useState(3);
  const onChangeHandlerTitle = (e)=> {
    setTitle(e.target.value); 
   
  }
  const onChangeHandlerBody = (e0)=> {
    setBody(e0.target.value);
    
  }
const addbt = (e)=> {
  e.preventDefault();
  setId(id +1);
  dispatch(createlist(id, title, body));
  setTitle("");
  setBody("");
  inputRef.current.focus();
  
};

  return (

    <form className="add-form">
      <div className="input-group">
        <label className="form-label">제목</label>
        <input
          type="text"
          name="title"
          value={title}
          ref = {inputRef}
          className="add-input input-body"
          onChange={onChangeHandlerTitle}
        />
        <label className="form-label">내용</label>
        <input
          type="text"
          name="body"
          value={body}
          ref = {inputRef}
          className="add-input"
          onChange={onChangeHandlerBody}
        />
      </div>
      <button className="add-button" onClick={addbt} type = "submit"   >추가하기</button>
    </form>
  );
}

export default Form;
