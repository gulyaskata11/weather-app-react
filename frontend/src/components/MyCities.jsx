import React from 'react'
import MyCity from './MyCity'
import { Text } from "@nextui-org/react"

const MyCities = ({myCities, setMyCities, handleCityName}) => {


    return (
        <div className='MyCitiesContainer' >
            <div className='MyCities' >
                <Text h3 css={{color:'antiquewhite'}} >My favorite cities</Text>
                {myCities?.map((city, i) => <MyCity key={i} city={city} myCities={myCities} setMyCities={setMyCities} handleCityName={handleCityName} />)}
            </div>
        </div>
    )
}

export default MyCities