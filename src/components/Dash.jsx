import { useEffect, React, useState } from 'react'
import RestaurantCard from './RestaurantCard'

const Dash = () => {
    const [restaurantData, setRestaurantData] = useState(null)
    console.log("component rendered")
    useEffect(() => {
        console.log("inside useEffect")
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4554835&lng=78.3684902&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING', {
            method: 'GET',
        })
        const data = await res.json()
        console.log(data)
        const listOfRestaurants = data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
        console.log("List of restaurants "+ JSON.stringify(listOfRestaurants))
        setRestaurantData(listOfRestaurants)
    }
   return (restaurantData === null) ? (<p>loading...</p>) : 
    (
    <div className='layout-cls'>
      {restaurantData.map((item) => {
        return (<RestaurantCard restaurantName={item?.info?.name} imgId={item?.info?.cloudinaryImageId} rating={item?.info?.avgRating} avgTime={item?.info?.sla?.slaString} cuisine={item?.info?.cuisines.toString()} location={item?.info?.areaName}/>)
      })}
      
    </div>
  )
}

export default Dash