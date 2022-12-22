import React, {useState, useEffect} from 'react'
import weatherContext from './WeatherContext'
import i from './info'

const WeatherState = (props) => {
  const [info, setInfo] = useState(i)
  const [date, setDate] = useState("")
  const [tempC, setTempC] = useState(0)
  const [city, setCity] = useState('Mumbai')
  const [iTimeofDay, setITimeofDay] = useState([])
  const [hourlyTemp, setHourlyTemp] = useState([])
  const [hourlyTempF, setHourlyTempF] = useState([])

  const getDataApi = async (cityu) => {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=557a382765944daf8fb41855221812&q=${cityu}&days=1&aqi=yes&alerts=no`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    let data = await response.json()
    console.log(data)
    setInfo(data)
    setTempC(data.current.temp_c)
    getHourList()
    getHourTemp()


    return data;
  }

  const getTodayDate = () => {
    setDate(info.current.last_updated.split(" ")[0])
  }

  const getHourList = () => {
    let newList = info.forecast.forecastday[0].hour.map((i) => parseInt(i.time.split(" ")[1].split(":")[0]))
    setITimeofDay(newList)
  }

  const getHourTemp = () => {
    let newList = info.forecast.forecastday[0].hour.map((i) => i.temp_c)
    let newListF = info.forecast.forecastday[0].hour.map((i) => i.temp_f)
    setHourlyTemp(newList)
    setHourlyTempF(newListF)
  }

  useEffect(() => {
    setInfo(i)
    getDataApi("Mumbai")
    
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    getHourList()
    getHourTemp()
    getTodayDate()
    // eslint-disable-next-line
  }, [info])

  return (
      <weatherContext.Provider value={{info, setCity, city, iTimeofDay, hourlyTemp, hourlyTempF, getDataApi, tempC, date}}>
          {props.children}
    </weatherContext.Provider>
  )
}

export default WeatherState