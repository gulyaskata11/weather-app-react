import React from 'react'
import { Text, Spacer } from "@nextui-org/react";

const ViewedCity = ({city, handleCityName}) => {

    const grabCityName = (event) => {
        handleCityName(event.target.innerText)
    }

    return (
        <div>
            <Text b onClick={grabCityName} css={{
                color:'antiquewhite',
                cursor:'pointer',
                }} >{city}
            </Text>
            <Spacer y={0.4} />
       </div>
    )
}

export default ViewedCity