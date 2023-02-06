import React from 'react'

const Forecast = ({forecast}) => {

   /*  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const dayName = days[today.getDay()];
 */
    const todayForecast = forecast.list[0].dt_txt.slice(0, 10)
    const daysForecast = forecast.list
                                    .filter(elem => !elem.dt_txt.includes(todayForecast))
                                    .slice(0, 32)
                                    .filter(elem => elem.dt_txt.includes('06:00:00') || elem.dt_txt.includes('12:00:00') || elem.dt_txt.includes('21:00:00'))
    
    let allDays = []
    for (let i=0; i < daysForecast.length; i += 3) {
        allDays.push(daysForecast.slice(i, i + 3));
    }
    

    return (
        <div>
           
        </div>
    )
}

export default Forecast