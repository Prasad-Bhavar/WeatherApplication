import React, { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import './weather.css';

function WeatherApp() {
    let [info,setInfo] = useState({
        city:'Delhi',
        feelsLike:28.21,
        humidity:26,
        temp:29.66,
        tempMin:29.66,
        tempMax:29.66,
        weather:'clear sky',
    })

    let updateInfo = (result)=>{
        setInfo(result);
    }
    return ( 
        <div className='weatherapp' style={{display:'flex'}}>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={info}/>
        </div>
     );
}

export default WeatherApp;