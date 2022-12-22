import React, { useContext, useState, useEffect } from 'react'
import weathercontext from '../Context/weatherinfo/WeatherContext'

const InfoCard = () => {
    const context = useContext(weathercontext)
    const [direction, setDirection] = useState(null)
    const { city, info, tempC, date } = context

    useEffect(() => {
        switch (info.current.wind_dir) {
            case "N" || "NNE" || "NNW":
                setDirection('\u2191')
                break;
            case "S" || "SSW" || "SSE":
                setDirection('\u2193')
                break;
            case "E" || "ENE" || "ESE":
                setDirection('\u2192')
                break;
            case "W" || "WNW" || "WSW":
                setDirection( '\u2190' )
                break;
            case "NE":
                setDirection( '\u2197' )
                break;
            case "SE":
                setDirection('\u2198')
                break;
            case "NW":
                setDirection('\u2196')
                break;
            case "SW":
                setDirection( '\u2199' )
                break;
            default:
                break;
        }
        // eslint-disable-next-line
    }, [city])

  return (
      <>
        <div className="card" style={{height: "100%"}}>
              <div className="card-body">
                  <div className="d-flex justify-content-between">
                      <h2 className="card-title">{city}!</h2>
                        <h3>{ new Date(date).toDateString() }</h3>
                  </div>
                  
                  <hr />
                  <div className="container">
                      <div className="row justify-content-evenly">
                          <div className="col-4">
                              <p className="info">Temp: {tempC}&#176;C</p>
                              <p className="info">Feels Like: {info.current.feelslike_c}&#176;C</p>
                              <p className="info">Wind Speed: {info.current.wind_kph} { direction }</p>
                              <p className="info">Humidity: {info.current.wind_kph}</p>
                              <p className="info">AQI: { Math.round(info.current.air_quality.pm2_5) }</p>
                          </div>
                          <div className="col-6 text-center">
                              <div className='icon' style={{paddingBottom: "1rem"}}>
                                    <img src={info.current.condition.icon} alt={info.current.condition.text} />
                                    <p className="info">{info.current.condition.text}</p>
                              </div>
                              
                          </div>
                      </div>
                  </div>
            </div>
            </div>
      </>
  )
}

export default InfoCard