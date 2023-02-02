import React from 'react'
import './ViewedCity.css'

const ViewedCity = ({city, handleCityName}) => {

    const grabCityName = (event) => {
        handleCityName(event.target.innerText)
    }

    return (
       
        <div className='viewedcity' onClick={grabCityName} > {city} </div>
 
    )
}

export default ViewedCity