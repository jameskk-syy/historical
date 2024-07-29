"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GiWindsock, GiRaining } from 'react-icons/gi';
import { MdSunny } from 'react-icons/md';
import { Air } from '@mui/icons-material';
import { PiSunLight } from 'react-icons/pi';
import { TiWeatherPartlySunny } from 'react-icons/ti';


const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('Nairobi'); // Default location
  const apiKey = '330c928ed94727b71d2d64d458827faf';

  useEffect(() => {
    const fetchWeatherData = async (lat, lon) => {
      console.log('Fetching weather data for coordinates:', lat, lon);
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      )
      .then(response => {
        console.log('Weather data fetched successfully:', response.data);
        setWeatherData(response.data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
    };

    const fetchWeatherDataByCity = async (city) => {
      console.log('Fetching weather data for city:', city);
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
      .then(response => {
        console.log('Weather data fetched successfully:', response.data);
        setWeatherData(response.data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log('User location obtained:', position.coords.latitude, position.coords.longitude);
          fetchWeatherData(position.coords.latitude, position.coords.longitude);
        }, (error) => {
          console.error('Error getting location:', error);
          fetchWeatherDataByCity(location); // Fallback to default location
        });
      } else {
        console.error('Geolocation not supported by this browser');
        fetchWeatherDataByCity(location); // Fallback to default location
      }
    };

    getLocation();
  }, [location]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  if (!weatherData) {
    return <p>Loading...</p>;
  }

  const { wind, main, weather, clouds, sys, name } = weatherData;
 

  return (
    <div className="bg-card3 w-full">
      <div className="flex flex-row w-full justify-between p-3 bg-card3">
        <div className="flex flex-col">
          <p className="font-abc text-3xl text-white">Farmer Location: {name}, {sys.country}</p>
          <p className="font-abc text-xl text-white">{formattedDate}</p>
        </div>
        <p className="font-abc text-xl text-white">{formattedTime}</p>
      </div>
      <div className="flex flex-row w-full justify-between p-3 bg-card3">
        <GiWindsock className="text-white text-3xl" />
        <p className="font-abc text-white">Wind Speed</p>
        <div className="flex flex-col">
          <p className="font-abc text-xl text-white">{wind.speed} Km/h</p>
          <p className="font-abc text-xl text-white">Wind Direction: {wind.deg}°</p>
        </div>
      </div>
      <div className="flex flex-row w-full justify-between p-3 bg-card3">
        <GiRaining className="text-white text-3xl" />
        <p className="font-abc text-white">Humidity</p>
        <div className="flex flex-col">
          <p className="font-abc text-xl text-white">{main.humidity}%</p>
        </div>
      </div>
      <div className="flex flex-row w-full justify-between p-3 bg-card3">
        <Air className="text-white text-3xl" />
        <p className="font-abc text-white">Pressure</p>
        <div className="flex flex-col">
          <p className="font-abc text-xl text-white">{main.pressure} hPa</p>
        </div>
      </div>
      <div className="flex flex-row w-full justify-between p-3 border-b-2 bg-card3">
        <PiSunLight className="text-white text-3xl" />
        <p className="font-abc text-white">Cloudiness</p>
        <div className="flex flex-col">
          <p className="font-abc text-xl text-white">{clouds.all}%</p>
        </div>
      </div>
      <p className="font-abc text-4xl text-white justify-start">Forecast</p>
      <div className="flex flex-row w-full justify-between p-3 bg-card3">
        <TiWeatherPartlySunny className="text-white text-3xl" />
        <p className="font-abc text-white">{weather[0].description}</p>
        <div className="flex flex-col">
          <p className="font-abc text-xl text-white">{formattedDate}</p>
        </div>
      </div>
      <div className="flex flex-row w-full justify-between p-3 bg-card3">
        <MdSunny className="text-white text-3xl" />
        <p className="font-abc text-white">Temperature</p>
        <div className="flex flex-col">
          <p className="font-abc text-xl text-white">Current: {main.temp}°C</p>
          <p className="font-abc text-xl text-white">Feels like: {main.feels_like}°C</p>
          <p className="font-abc text-xl text-white">Min: {main.temp_min}°C</p>
          <p className="font-abc text-xl text-white">Max: {main.temp_max}°C</p>
        </div>
      </div>
      <input
        type="text"
        value={location}
        onChange={handleLocationChange}
        placeholder="Enter location"
        className="p-2 m-3 border rounded"
      />
    </div>
  );
};

export default WeatherComponent;

