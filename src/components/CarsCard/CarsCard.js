import React, {  } from 'react'
import './CarsCard.css'

const CarsCard = ({car,toggleWishlist,isWishlist}) => {
    
  return (
    <div className='cars-card'>
      <a href={car.link} alt="Car Link" target="_blank" rel="noreferrer">
      <img
      className='car-image'
        src={car.image}
        alt={car.title}
       
      />
      <div className="cars-card-info">
        <h3 className="car-card-title">{car.title}</h3>
        <div>
          <span className="car-card-type">{car.type} </span>|
          <span className="car-card-price"><b> ₹ {car.price}</b>
            
          </span>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={isWishlist}
            onChange={() => toggleWishlist(car.id)}
          ></input>
          <span className="slider">
            <span className="slider-label">
                
              {isWishlist ? "In Wishlist" : "Add to Wishlist"}            </span>
          </span>
        </label>
      </div>
      </a>
    </div>
  )
}

export default CarsCard
