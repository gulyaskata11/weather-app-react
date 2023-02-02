import React from 'react'
import ViewedCity from './ViewedCity'

const ViewedCities = ({viewedCities, handleCityName}) => {



    return (
        <div className='ViewedCities'>
             <h3>Viewed cities</h3>
            {viewedCities?.map((city, i) => <ViewedCity key={i} city={city} handleCityName={handleCityName} /> )}
        </div>
    )
}

export default ViewedCities