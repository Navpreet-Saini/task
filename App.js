import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Signup from "./components/Signup";
import Login from "./components/Login";
import CarList from "./components/CarList";
import AddCar from "./components/AddCar";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cars" element={<CarList />} />
          <Route path="/add-car" element={<AddCar />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
