import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WeatherAPI() {
    const [weatherData, setWeatherData] = useState(null);
    const [weatherData1, setWeatherData1] = useState(null);

    const [err, setErr] = useState("");

    useEffect(() => {
        axios
            .get("http://api.weatherapi.com/v1/current.json?key=89561957c42d4e71a53110938241007&q=india&aqi=no")
            .then((response) => {
                console.log(response.data);
                setWeatherData(response.data.location);
                setWeatherData1(response.data.current);

            })
            .catch((error) => {
                console.log(error.message);
                setErr(error.message);
            });
    }, []);

    if (err) {
        return <p>Error: {err}</p>;
    }

    if (!weatherData) {
        return <div>Loading...</div>;
    }

    const { name, region, country, lat, lon, tz_id, localtime_epoch, localtime } = weatherData;
    const { wind_mph , wind_kph , wind_degree , pressure_mb, humidity, cloud  } = weatherData1;




    return (
        <>
            <h4>Name: {name}</h4>
            <h4>Region: {region}</h4>
            <h4>Country: {country}</h4>
            <h4>Lat: {lat}</h4>
            <h4>Lon: {lon}</h4>
            <h4>tz_id: {tz_id}</h4>
            <h4>Localtime_epoch: {localtime_epoch}</h4>
            <h4>Localtime: {localtime}</h4>

            <h4>Wind_mph: {wind_mph}</h4>
            <h4>Wind_kph: {wind_kph}</h4>
            <h4>Wind_degree: {wind_degree}</h4>
            <h4>Pressure: {pressure_mb}</h4>
            <h4>Humidity: {humidity}</h4>
            <h4>Cloud: {cloud}</h4>



            
        </>
    );
}

export default WeatherAPI;
