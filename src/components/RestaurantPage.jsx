import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const RestaurantPage = () => {
    const [restInfo, setRestInfo] = useState(null)
    const {id} = useParams();
    useEffect(()=> {
        fetchData()
    },[])

    const fetchData = async () => {
      console.log(id)
      const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4554835&lng=78.3684902&restaurantId="+id)
        const data = await response.json()
        const restaurantInfo = data.data.cards[0].card.card.info
        setRestInfo(restaurantInfo)
        console.log(data)
    }
  return (restInfo === null) ? (<p>loading... please wait</p>) : (
    <div>
      welcome to restaurant page!
      <h1>{restInfo.name}</h1>
      <p>Ratings: {restInfo.totalRatingsString}</p>
    </div>
  )
}

export default RestaurantPage