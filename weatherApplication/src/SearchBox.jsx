import React, { useState } from 'react';
import {TextField,Button} from "@mui/material";
// import SendIcon from '@mui/icons-material';
import './assets/searchbox.css';

function SearchBox({updateInfo}) {
    let [city,setCity]=useState('');
    const API_URL ='https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = '151aa9276a8e3d70f327462039a67c3b';

    const getWeatherData = async() =>{
       
        const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let weatherData =await response.json();
        console.log(weatherData);
        let result = {
            city:city,
            temp: weatherData.main.temp,
            tempMin: weatherData.main.temp_min,
            tempMax: weatherData.main.temp_max,
            humidity: weatherData.main.humidity,
            weather:weatherData.weather[0].description,
            feelsLike: weatherData.main.feels_like,
        }
        console.log(result);
        return result;
         
    }

    const handleInput = (evt)=>{
        setCity(evt.target.value);
    }
    const handleSubmit = async(evt)=>{
        evt.preventDefault();
        console.log(city);
        setCity('');
        let result =await getWeatherData();
        updateInfo(result);

    }

    return ( 
        <div className='search-box'>
            <h1>Search for City</h1>
            <form onSubmit={handleSubmit}>
            <TextField id="City" label="City" variant="outlined" required value={city} onChange={handleInput}/><br/><br/>
            <Button variant="contained" type='submit'>
                Search
                </Button>
            </form>
        </div>
     );
}

export default SearchBox;
