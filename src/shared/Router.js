import React,{} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "../pages/TodoList.jsx";
import ViewDetails from "../pages/ViewDetails";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<TodoList/>} />
      <Route exacr path="/ViewDetails" element={<ViewDetails/>} />
      <Route exact path="Todo/:id" element={<ViewDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;