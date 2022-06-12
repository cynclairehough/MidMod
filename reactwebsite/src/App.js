import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomepageRoute from "./HomeRoute";
import RestaurantspageRoute from "./RestaurantsRoute";

function App() {
  return (
    <>
      {/* <Router>
     <Navbar/>
     <Routes>
      <Route path='/' element={Home} />
     </Routes>
     </Router> */}
      <Routes>
        <Route path="/" element={<HomepageRoute />} />
        <Route path="/Restaurants" element={<RestaurantspageRoute />} />
      </Routes>
    </>
  );
}

export default App;