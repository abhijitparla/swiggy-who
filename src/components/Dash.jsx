import { useEffect, React, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import { Link } from 'react-router-dom'

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

    function getFormattedString(value) {
      const result = value.toLowerCase().replaceAll("-","").split(" ").filter((item) => item !== "").join("-")
      return result
    }
   return (restaurantData === null) ? (<p>loading...</p>) : 
    (
    <div className='layout-cls'>
      {restaurantData.map((item) => {
        const areaName = getFormattedString(item?.info?.areaName)
        console.log("Area name: ",areaName)
        const locality = getFormattedString(item?.info?.locality)
        console.log("Locality: ",locality)
        let id = ""
        if(areaName === locality){
          id = getFormattedString(item?.info?.name)+"-"+getFormattedString(item?.info?.locality)+"-hyderabad-"+getFormattedString(item?.info?.id)
        }else {
          id = getFormattedString(item?.info?.name)+"-"+getFormattedString(item?.info?.locality)+"-"+getFormattedString(item?.info?.areaName)+"-hyderabad-"+getFormattedString(item?.info?.id)
        }
        console.log("the formatted id",id)
        return (<Link key={item?.info?.id} to={`/restaurant/`+item?.info?.id}><RestaurantCard restaurantName={item?.info?.name} imgId={item?.info?.cloudinaryImageId} rating={item?.info?.avgRating} avgTime={item?.info?.sla?.slaString} cuisine={item?.info?.cuisines.toString()} location={item?.info?.areaName}/></Link>)
      })}
      
    </div>
  )
}

export default Dash