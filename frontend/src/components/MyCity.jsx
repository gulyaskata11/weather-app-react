import React from 'react'
import { Text, Button } from "@nextui-org/react";

const MyCity = ({city, myCities, setMyCities, handleCityName}) => {

    const deleteCity = () => {
        if(myCities.includes(city)){
            let withoutCity = myCities.filter((elem) => elem !== city)
            setMyCities([...withoutCity])
            localStorage.setItem("myCities", JSON.stringify([...withoutCity]))
        }
    }

    const grabCityName = (event) => {
        console.log(event)
        handleCityName(event.target.innerText)
    }

    return (
        <>
        <div className='MyCity' >
            <Text b onClick={grabCityName} css={{
              color:'antiquewhite',
              cursor:'pointer',
              }} >{city}
            </Text>
            <Button size="xs" flat color="error" auto onClick={deleteCity} >Delete</Button>
        </div>
        <hr />
        </>
    )
}

export default MyCity