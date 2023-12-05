import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ToDoApp from "./components/pages/ToDoApp"
import WeatherApp from "./components/pages/WeatherApp"
import Calculator from "./components/pages/Calculator"
import Cryptocurrencies from "./components/pages/Cryptocurrencies"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path='/'></Route>
        <Route element={<ToDoApp />}path='/ToDoApp'></Route>
        <Route element={<Calculator />}path='/Calculator'></Route>
        <Route element={<WeatherApp />}path='/WeatherApp'></Route>
        <Route element={<Cryptocurrencies />}path='/Cryptocurrencies'></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
