import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import './infobox.css';

function InfoBox({info}) {
    let IMG_URL='https://www.google.com/url?sa=i&url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Fscience%2Fweather-forecast-today-different-ways-to-predict-weather-without-a-forecast%2Farticleshow%2F111597213.cms&psig=AOvVaw0QRsuhQAjXJBAYWH0qfdJs&ust=1732010133592000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKjXkNbO5YkDFQAAAAAdAAAAABAK';

    return ( 
        <div className='Info-box'>
            <div className='cardcontainer'>
        <Card sx={{ maxWidth: 345 }}>
        {/* <h2 style={{textAlign:'center'}}>{info.weather}</h2> */}
            <CardMedia
                sx={{ height: 180 }}
                image='./weatherimg.avif'
                title="green iguana"
            />
            <CardContent style={{width:'400px'}}>
                
                <Typography gutterBottom variant="h5" component="div">
                {info.city}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'span'} >
                <p>feels Like: {info.feelsLike}&deg;C</p>
                <p>Humidity: {info.humidity}</p>
                <p>Tempreture: {info.temp}&deg;C</p>
                <p>Temp Min: {info.tempMin}&deg;C</p>
                <p>Temp Max: {info.tempMax}&deg;C</p>
                <p>Description: weather is like <i>{info.weather}</i></p>
                </Typography>
            </CardContent>
            
            </Card>
            </div>
        </div>
     );
}

export default InfoBox;