import React from 'react'
import spacebg from '../Images/spacebg.jpg'
import InfoCard from './InfoCard'
import MyChart from './MyChart'
import Welcome from './Welcome'

const Home = () => {
    return (
      <>
            <img src={spacebg} alt="" style={{ width: "100%", position: "fixed", zIndex: "-2" }} />
                <div className="container" style={{paddingTop: "3.5rem"}}>
            <div className="row justify-content-between">
                <div className="col col-4">
                    {/* Welcome + location selector */}
                    <Welcome />    
                </div>
                <div className="col col-8">
                        {/* Weather Condition + Icon if possible */}
                        <InfoCard />
                </div>   
                </div>
                <div className="row my-5 justify-content-center">
                    <div className="col">
                        <MyChart />
                    </div>
                </div>
            </div>
        
      </>
  )
}

export default Home