import './App.css';
import { useState, useEffect } from 'react'
import Search from './components/Search';
import WeatherCard from './components/WeatherCard';
import Header from './components/Header';
import ViewedCities from './components/ViewedCities';
import MyCities from './components/MyCities';

function App() {

  const [weatherData, setWeatherData] = useState({})
  const [cityName, setCityName] = useState("")
  const [viewedCities, setViewedCities] = useState([])
  const [myCities, setMyCities] = useState([])

  const apiKey = "b63d18c1c8eada43a9173853b0a367ef"
  let fetchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&lang=en&units=metric`

   useEffect(() => {
    if(cityName !== ""){
      fetch(fetchUrl)
        .then(res => res.json())
        .then(data => {
          if(data.cod !== 200){
            alert('Unexpected error happened. ' + data.message.charAt(0).toUpperCase() + data.message.slice(1))
          }else{
            setWeatherData(data)
          }
        })
    }
  }, [cityName]) 
 
  const handleCityName = (inputValue) => {
    setCityName(inputValue)
  }
  console.log(cityName)
  console.log(viewedCities)

  useEffect(() => {
    if(Object.keys(weatherData).length > 0){
      if(!viewedCities.includes(weatherData.name)){
        let newCity = [weatherData.name]
        setViewedCities([...viewedCities].concat(newCity))
      }
    }
  }, [weatherData])

  useEffect(() => {
    const favoritesItem = JSON.parse(localStorage.getItem("myCities"));
    if (favoritesItem) {
      setMyCities(favoritesItem);
    }
  }, []);

  useEffect(() => {
    if (myCities.length > 0) {
      localStorage.setItem("myCities", JSON.stringify(myCities));
    }
  }, [myCities]);

  console.log(myCities)

  return (
    <div className="App">
      <Header />
      <Search handleCityName={handleCityName} />
      <div className='container' >
        <MyCities myCities={myCities} setMyCities={setMyCities} handleCityName={handleCityName} /> 
        {Object.keys(weatherData).length > 0 && <WeatherCard weatherData={weatherData} myCities={myCities} setMyCities={setMyCities} />} 
        <ViewedCities viewedCities={viewedCities} handleCityName={handleCityName} />
      </div>
    </div>
  );
}

export default App;
