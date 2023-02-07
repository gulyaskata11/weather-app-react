import React from 'react'
import { Collapse, Text, Grid, Card, Row, Image } from "@nextui-org/react"

const Forecast = ({forecast}) => {

   //api icon: {`http://openweathermap.org/img/wn/${hours.weather[0].icon}@2x.png`}

    const todayForecast = forecast.list[0].dt_txt.slice(0, 10)
    const daysForecast = forecast.list
                                    .filter(elem => !elem.dt_txt.includes(todayForecast))
                                    .slice(0, 32)
                                    .filter(elem => elem.dt_txt.includes('06:00:00') || elem.dt_txt.includes('12:00:00') || elem.dt_txt.includes('21:00:00'))
    
    let allDays = []
    for (let i=0; i < daysForecast.length; i += 3) {
        allDays.push(daysForecast.slice(i, i + 3));
    }
  
    console.log(allDays)
    const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const dayinInAWeek = new Date().getDay()
    const forecastDays = WEEK_DAYS.slice(dayinInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayinInAWeek))

    return (
        <div className='Forecast' >           
            <Collapse.Group splitted css={{width:'65%'}} justify='center' >
                {allDays.map((day, i) => (
                <Collapse title={forecastDays[i]} key={i} css={{width:'100%'}} >
                    <Grid.Container gap={2} >
                    <Row justify="flex-end">      
                        {day.map((hours, i) => (<Grid sm={12} md={5} key={i} >
                            <Card css={{ mw: "530px" }} >
                                <Card.Header css={{backgroundColor:'$yellow400'}} >
                                    <Text b>{hours.dt_txt.slice(10, 16)}</Text>
                                    <Image
                                        src={`/icon/${hours.weather[0].icon}.png`}
                                        alt='icon'
                                        width={50}
                                        height={50}
                                        objectFit='cover'
                                    />
                                </Card.Header>
                                <Card.Divider />
                                <Card.Body css={{ py: "$10" }}>
                                    <Grid.Container justify='space-evently' alignItems='center' gap={1} >
                                        <Grid xs={4} >
                                            <Text h1 size="$4xl" >
                                                {Math.round(hours.main.temp)}°C
                                            </Text>
                                        </Grid>
                                        <Grid xs={8} direction='column'>
                                            <Text>
                                                Feels like: {Math.round(hours.main.feels_like)} °C
                                            </Text>
                                            <Text>
                                                Wind speed: {hours.wind.speed} km/h
                                            </Text>
                                            <Text>
                                                Humidity: {hours.main.humidity} g/m3
                                            </Text>
                                        </Grid>
                                    </Grid.Container>
                                </Card.Body>
                            </Card>
                        </Grid>))}
                    </Row>    
                    </Grid.Container>

                
              </Collapse>))}
            </Collapse.Group>
        </div>    
      )
}

export default Forecast