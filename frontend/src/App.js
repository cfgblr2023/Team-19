import "./App.css";
import Home from "./Components/Home";
import IssueForm from "./Components/form"
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
     
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/form" element={<IssueForm/>} />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
