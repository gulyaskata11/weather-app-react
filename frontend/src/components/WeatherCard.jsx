import React from 'react'
import { Text, Image, Tooltip, Card, Grid } from "@nextui-org/react"

function WeatherCard({weatherData, myCities, setMyCities}) {

  let icon = weatherData.weather[0].icon
 //api icon: {`http://openweathermap.org/img/wn/${icon}@2x.png`}
  let visibility = weatherData.visibility.toString()

  const handleVisibility = () => {
    if(visibility.length >= 4){
      return visibility.slice(0, -3) + " km"
    }else{
      return visibility + " m"
    }
  }

  const handleMyCities = () => {
    if(!myCities.includes(weatherData.name)){
      return setMyCities([...myCities, weatherData.name])
    }
  }

  return (
    <>
    <div className='WeatherCard'>
    <Card css={{ minWidth: "650px" }} >
      <Card.Header css={{backgroundColor:'$yellow400'}} >
        <Grid.Container css={{maxWidth:'450px'}} >
          <Grid xs={12} >
            <Tooltip
              color="invert"
              content="Add to My favorite cities"
              placement="topStart"
            >
            <Text b size={50} css={{
              textGradient: "45deg, $red700 20%, $pink700 100%",
              cursor:'pointer'
              }}
              weight="bold" onClick={handleMyCities} >{weatherData.name}</Text>
            </Tooltip>  
          </Grid>
          <Grid xs={12} >
            <Text css={{
              textGradient: "45deg, $gray900 -25%, $gray800 100%",
              }} >{weatherData.weather[0].description.toUpperCase()}</Text>
          </Grid>
        </Grid.Container>
        <Image
          src={`/icon/${(icon)}.png`}
          alt='icon'
          width={120}
          height={120}
          objectFit='cover'
        />
      </Card.Header>
      <Card.Divider />
      <Card.Body>
      <Grid.Container justify='space-evently' alignItems='center' css={{px:'$6'}} gap={2} >
         <Grid xs={6} >
            <Text h1 size="$9xl" >
              {Math.round(weatherData.main.temp)}°C
            </Text>
        </Grid>
        <Grid xs={6} >
          <Card css={{ mw: "460px", borderRadius: '$xs', background: 'none' }}>
            <Card.Header>
              <Text b size="$2xl" css={{
                textGradient: "45deg, $red700 20%, $pink700 100%",
                }} >Detailed Information
              </Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
              <Text h3 >
                Feels like: {Math.round(weatherData.main.feels_like)} °C
              </Text>
              <Text h3 >
                Wind speed: {weatherData.wind.speed} km/h
              </Text>
              <Text h3 >
                Humidity: {weatherData.main.humidity} g/m3
              </Text>
              <Text h3 >
                Visibility: {handleVisibility()}
              </Text>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
      </Card.Body>
    </Card>
    </div>
    {/* <div className='WeatherCard'>
      <section className='sec-1'>
        <Text h1 size={80} css={{
          textGradient: "45deg, $red700 20%, $pink700 100%",
          }}
          weight="bold" onClick={handleMyCities} >{weatherData.name}</Text>
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
              Temperature: {Math.floor(weatherData.main.temp)} °C
            </Text>
            <Text h4 size="$2xl" >
              Feels like: {Math.floor(weatherData.main.feels_like)} °C
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
    </div> */}
    </>
  );

}

export default WeatherCard