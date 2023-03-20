
import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import TodosContainer from "./components/Todos/TodosContainer";



function App() {
  return (
      <BrowserRouter>
          <div className="menu">
              <ul>
                  <li> <Link to="/">Home</Link> </li>
                  <li> <Link to="/about">About</Link> </li>
              </ul>
          </div>
          <Routes>
            <Route path="/" element={<TodosContainer/>} />
            <Route path="/about" element={<div style={{margin: '20px', color: 'white'}}>About Page</div>} />
          </Routes>
      </BrowserRouter>

  );
}

export default App;
