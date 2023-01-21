import React from 'react'
import './WeatherCard.css'
import { Text, Image, Spacer, Card } from "@nextui-org/react"

function WeatherCard({weatherData}) {

  let icon = weatherData.weather[0].icon
  let visibility = weatherData.visibility.toString()

  const handleVisibility = () => {
    if(visibility.length >= 4){
      return visibility.slice(0, -3) + " km"
    }else{
      return visibility + " m"
    }
  }

  return (
    <div className='WeatherCard'>
      <section>
        <Text h1 size={80} css={{
          textGradient: "45deg, $red700 20%, $pink700 100%",
          }}
          weight="bold" >{weatherData.name}</Text>
        <Image
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt='icon'
          width={150}
          height={150}
          objectFit='cover'
        />
        <Spacer y={3.5} />
        <Text h1 i size={40} css={{
          textGradient: "45deg, $gray900 -25%, $gray800 100%",
          }} >{weatherData.weather[0].description.toUpperCase()}</Text>
      </section>
      <section className='details-card'>
      <Spacer y={4} />
      <Card css={{ mw: "460px", borderRadius: '$xs', background: 'none' }}>
          <Card.Header>
            <Text b size="$4xl" css={{
          textGradient: "45deg, $red700 20%, $pink700 100%",
          }} >Detailed Information</Text>
          </Card.Header>
          <Card.Body css={{ py: "$10" }}>
            <Text h4 size="$2xl" >
              Temperature: {weatherData.main.temp} °C
            </Text>
            <Text h4 size="$2xl" >
              Feels like: {weatherData.main.feels_like} °C
            </Text>
            <Text h4 size="$2xl" >
              Wind speed: {weatherData.wind.speed} km/h
            </Text>
            <Text h4 size="$2xl" >
              Humidity: {weatherData.main.humidity} g/m3
            </Text>
            <Text h4 size="$2xl" >
              Visibility: {handleVisibility()}
            </Text>
          </Card.Body>
        </Card>
      </section>
    </div>
  );

}

export default WeatherCard