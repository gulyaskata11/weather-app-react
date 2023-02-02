import React from 'react'

const MyCity = ({city, myCities, setMyCities, handleCityName}) => {

    const deleteCity = () => {
        if(myCities.includes(city)){
            let withoutCity = myCities.filter((elem) => elem !== city)
            return setMyCities([...withoutCity])
        }
    }

    const grabCityName = (event) => {
        console.log(event)
        handleCityName(event.target.innerText)
    }

    return (
        <div>
            <div onClick={grabCityName}> {city} </div>
            <button onClick={deleteCity} >X</button>
        </div>
    )
}

export default MyCity