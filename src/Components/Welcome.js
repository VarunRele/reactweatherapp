import React, {useContext} from 'react'
import weathercontext from '../Context/weatherinfo/WeatherContext'
import Select from 'react-select';

const Welcome = () => {
  const context = useContext(weathercontext)
  const { setCity, getDataApi } = context

  const options = [
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Pune', label: 'Pune' },
    { value: 'Kolkata', label: 'Kolkata' },
    { value: 'Paris', label: 'Paris' },
    { value: 'Dubai', label: 'Dubai' },
    { value: 'Bangalore', label: 'Bangalore' }
  ]

  const handleSelectedOption = (e) => {
    setCity(e.value)
    console.log(e)
    getDataApi(e.value)
  }

  return (
      <>
          <div className="card" style={{height: "100%"}}>
            <div className="card-body">
                  <h2 className="card-title">Welcome to my <div className='title'>Weather App</div></h2>
                  <hr />
                  <label htmlFor="city" style={{fontSize: "1.5rem"}}>Select you City: </label>
                  <Select
            defaultValue='Mumbai'
            placeholder="Mumbai"
                    onChange={handleSelectedOption}
            options={options}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                color: "black",
              }),
              singleValue: (baseStyles, state) => ({
                ...baseStyles,
                color: "black",
              }),
              option: (baseStyles, state) => ({
                ...baseStyles,
                color: 'black',
              }),
            }}
                  />
            </div>
            </div>
      </>
  )
}

export default Welcome