import { Routes, Route, } from "react-router-dom";
import Router from "./shared/Router";
import TodoList from "./pages/TodoList";
import ViewDetails from "./pages/ViewDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/viewdetails/:id' element={<ViewDetails />}/>
          <Route path='/' element={<TodoList/>}/>
      </Routes>
    </div>
  );
}

export default App;
