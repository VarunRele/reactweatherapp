import './App.css';
import Home from './Components/Home';
import WeatherState from './Context/weatherinfo/WeatherState';

function App() {
  return (
    <>
      <WeatherState>
        <Home />
      </WeatherState>
    </>
  );
}

export default App;
