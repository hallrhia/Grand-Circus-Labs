import React from 'react';
import logo from './logo.svg';
import './App.css';
import { WeatherForecast } from './components/WeatherForecast';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
     <WeatherForecast />
    </div>
  );
}

export default App;
