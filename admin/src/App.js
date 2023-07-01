import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { hotelColumns, userColumns } from "./datatablesource";


function App() {
  const { darkMode } = useContext(DarkModeContext);

  // creating producted route
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext)

    if (!user) {
      return <Navigate to="/login" />
    }
    return children;
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={
              // this is how we implemet protected routes
              // <ProtectedRoute>
                <Home />
              // </ProtectedRoute>

            }

            />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={
                <ProtectedRoute>
                  <List columns={userColumns} />
                </ProtectedRoute>
              }

              />
            
            </Route>

          
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
