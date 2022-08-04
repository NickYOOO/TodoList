

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ViewDetails.css";
import { useSelector } from "react-redux";

const ViewDetails = (props) => {

  const navigate = useNavigate()
  const container = useSelector((state)=> state.todo.list)
  console.log(container)
  const {id} = useParams()
  const match = container.find((todoitem)=> todoitem.id == id)

  return (
    <div className="body">
      <div className="detail-wrapper">
        <div className="id-button">
          <p>id : {match.id}  </p>
          <button className="back-button" onClick={() => navigate('/')} >이전으로</button>
        </div>
        <div>
          <h1>{match.title}</h1>
          <main>{match.body}</main>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;