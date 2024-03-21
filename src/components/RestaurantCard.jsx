import React from 'react'

const RestaurantCard = ({restaurantName, imgId, rating, avgTime, cuisine, location}) => {
  return (
    <div className='rest-card'>
      <div className='rest-img-cls'>
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/`+imgId} alt="" />
      </div>
      <div className='rest-card-items'>
        <h3>{restaurantName}</h3>
        <p>Rating: {rating} {avgTime}</p>
        <p className='cuisine-cls'>{cuisine}</p>
        <p>{location}</p>
      </div>
    </div>
  )
}

export default RestaurantCard
