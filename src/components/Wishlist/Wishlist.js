import React from "react";
import CarsCard from "../CarsCard/CarsCard";
import "./Wishlist.css";

const Wishlist = ({ wishlist, cars, toggleWishlist }) => {
  return (
    <div className="wishlist-container">
      <h1 className="title">Your Watchlist</h1>
      {!wishlist.length && <p className="nothing">Your watchlist is currently empty</p>}
      <div className="wishlist">
        {wishlist.map((id) => {
          const car = cars.find((car) => car.id === id);
          return (
            <CarsCard
              key={id}
              car={car}
              toggleWishlist={toggleWishlist}
              isWishlist={true}
            ></CarsCard>
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
