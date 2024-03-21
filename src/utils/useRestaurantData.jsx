import { useEffect, useState } from "react"

const useRestaurantData = () => {
    const [resInfo, setResInfo] = useState(null)
    console.log("the new hook being called")
    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {
        console.log("inside the api call")
        
        const res = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4554835&lng=78.3684902&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING', {
            method: 'GET',
        })
        
        const data = await res.json()
        console.log("Response of the api call", data)
        setResInfo(data)
    }

    return resInfo

}

export default useRestaurantData;