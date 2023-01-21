import './App.css';
import { useState, useEffect } from 'react'
import Search from './components/Search';
import WeatherCard from './components/WeatherCard';
import Header from './components/Header';

function App() {

  const [weatherData, setWeatherData] = useState({})
  const [cityName, setCityName] = useState("")

  const apiKey = "b63d18c1c8eada43a9173853b0a367ef"
  let fetchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&lang=en&units=metric`

   useEffect(() => {
    if(cityName !== ""){
      fetch(fetchUrl)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.cod === '404'){
            alert(data.message.charAt(0).toUpperCase() + data.message.slice(1))
          }else{
            setWeatherData(data)
          }
        })
    }
  }, [cityName]) 
 
  const handleCityName = (inputValue) => {
    setCityName(inputValue)
  }

  return (
    <div className="App">
      <Header />
      <Search handleCityName={handleCityName} />
      {Object.keys(weatherData).length > 0 && <WeatherCard weatherData={weatherData} />} 
    </div>
  );
}

export default App;
