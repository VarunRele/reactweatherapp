import React, { useContext } from 'react'
import weathercontext from '../Context/weatherinfo/WeatherContext';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
  

const MyChart = () => {

    const context = useContext(weathercontext)
    const { iTimeofDay, hourlyTemp } = context

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Temp of the Day!',
          },
        },
      };
    
    const labels = iTimeofDay;
    
    const data = {
        labels,
        datasets: [
          {
            label: 'C',
            data: hourlyTemp,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
      };
    
  return (
      <>
          <div className="card" style={{zIndex: "-1"}} >
        {/* <img src="..." className="card-img-top" alt="..."/> */}
              <div className="card-body">
                  <Line style={{ backgroundColor: 'white' }} options={options} data={data} />
        </div>
        </div>

          
      </>
  )
}

export default MyChart