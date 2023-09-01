import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { AuthContextProvider } from "./Firebase/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          {/* <Home /> */}
          <div className="routeWrapper">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/register" element={<Signup />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
