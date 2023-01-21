import React, { useRef } from 'react'
import './Search.css'
import { Input, Spacer, Button } from "@nextui-org/react"

function Search({handleCityName}) {

 const inputRef = useRef(null);

  const handleInputKeyDown = event => {
    if (event.key === 'Enter') {
     event.preventDefault()
      handleCityName(inputRef.current.value)
    }
  }

  const handleInputClick = () => {
    handleCityName(inputRef.current.value)
  }


  return (
    <div className='Search'>
      <Input
        className='city-name-input'
        type="text"
        clearable
        labelPlaceholder="City Name"
        size="xl" 
        ref={inputRef} 
        onKeyDown={handleInputKeyDown}
      />
      <Spacer x={0.5} />
      <Button size="sm" color="gradient" auto ghost onPress={handleInputClick} >
        Search
        </Button>   
    </div>
  );

}

export default Search