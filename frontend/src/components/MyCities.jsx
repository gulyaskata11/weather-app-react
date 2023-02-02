import React from 'react'
import MyCity from './MyCity'

const MyCities = ({myCities, setMyCities, handleCityName}) => {


    return (
        <div>
            <h3>My favorite cities</h3>
            {myCities?.map((city, i) => <MyCity key={i} city={city} myCities={myCities} setMyCities={setMyCities} handleCityName={handleCityName} />)}
        </div>
    )
}

export default MyCities