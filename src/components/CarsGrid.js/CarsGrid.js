import CarsCard from "../CarsCard/CarsCard"
import "./CarsGrid.css"
import { useState } from "react"
import {FUEL_TYPE,PRICE_RANGE} from "../filters.js"

// import FUEL_TYPE from "../filter.js"
// import PRICE_RANGE from "../filter.js"

const CarsGrid = ({cars,wishlist,toggleWishlist}) => {
  const[search,setSearch]=useState("")
  const[fuelType,setFuelType]=useState("All")
  const[priceRange,setPriceRange]=useState("all")

  const handleSearch=(e)=>{
  setSearch(e.target.value)
  }

  const handleFuelType=(e)=>{
    setFuelType(e.target.value)
  }

  const handlePriceRange=(e)=>{
    setPriceRange(e.target.value)
  }

  const matchesSearch=(car,search)=>{
  return car.title.toLowerCase().includes(search.toLowerCase())
}

const matchesFuelType=(car,fuelType)=>{
  return fuelType==="All" || car.type===fuelType
}

const matchesPriceRange=(car,priceRange)=>{
  switch(priceRange){
    case "all":
      return true;
    case "below50L":
      return car.price<5000000;
    case "between50Land1Cr":
        return car.price>=5000000 && car.price<10000000;
    case "between1Crand2Cr":
        return car.price>=10000000 && car.price<20000000;
    case "above2cr":
        return car.price>=20000000
    default:
        return false;
  }
}

  const filteredCar=cars.filter((car)=>matchesSearch(car,search)&& matchesFuelType(car,fuelType)&&matchesPriceRange(car,priceRange))


    
  return (
    <div>
      <div className="cars-grid">
             
        <input
        type="text"
        className="search-input"
        placeholder="Search Cars.."
        value={search}
        onChange={handleSearch}
      />
      {search && (
    <span
      onClick={() => setSearch("")}
      className="clearSearch"
    >
      ✕
    </span>)}

    <div className="filter-bar">
      <div className="flilter-slot">
        <label>Fuel Type</label>
        <select className="filter-dropdown" defaultValue={fuelType} onChange={handleFuelType}>
        {
          Object.entries(FUEL_TYPE).map(([key,{label}])=>(
            <option key={key} value={key}>
              {label}
            </option>
          ))
        }
        </select>

      </div>
      <div className="flilter-slot">
        <label>Price Range</label>
        <select className="filter-dropdown" defaultValue={priceRange} onChange={handlePriceRange}>
        {
          Object.entries(PRICE_RANGE).map(([key,{label}])=>(
            <option key={key} value={key}>
              {label}
            </option>
          ))
        }
        </select>

      </div>
    </div>
     
        
        {filteredCar.map((car)=>(
            <CarsCard key={car.id} car={car} toggleWishlist={toggleWishlist} isWishlist={wishlist.includes(car.id)}/>
            
    ))}
 
 <div className="noResults">
      {!filteredCar.length && <p className="nothing">No Results Found</p>}

 </div>
        </div>

    </div>
  )
}

export default CarsGrid
