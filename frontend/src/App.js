import "./App.css";
import Home from "./Components/Home";
// import Dashboard from "./Components/dashboard";
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
        {/* <Route path="/dashboard" element={<Dashboard/>}></Route> */}
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
