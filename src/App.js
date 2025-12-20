import './App.css';
import CarsGrid from './components/CarsGrid.js/CarsGrid';
import Header from './components/header/Header';
import { useState } from 'react';
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Wishlist from "./components/Wishlist/Wishlist.js"



function App() {
  const[cars,setCars]=useState([]);
  const[wishlist,setWishlist]=useState([])

useEffect(() => {
        async function fetchCarsData() {
            try {
                const response = await fetch('/cars.json')
                const data = await response.json()
                console.log(data)
                setCars(data)
            } catch (error) {
                console.error('Error fetching cars data:', error)
            }
        }
        fetchCarsData()
    }, [])


  const toggleWishlist = (carId) => {
    setWishlist((prev) =>
      prev.includes(carId)
        ? prev.filter((id) => id !== carId)
        : [...prev, carId]
    );
  };

  return (
    <div className="App">
         <Header/>
         <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/wishlist">Wishlist</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <CarsGrid
                  wishlist={wishlist}
                  cars={cars}
                  toggleWishlist={toggleWishlist}
                />
              }
            ></Route>
            <Route
              path="/wishlist"
              element={
                <Wishlist
                  wishlist={wishlist}
                  cars={cars}
                  toggleWishlist={toggleWishlist}
                />
              }
            ></Route>
          </Routes>
        </Router>
         
          </div>
  );
}

export default App;
