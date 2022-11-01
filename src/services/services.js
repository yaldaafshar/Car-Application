import React from 'react';
import axios from 'axios';

export const getNames = ({setCarNames}) => {
  const baseUrl = "https://myfakeapi.com/api/cars/";
    
  axios.get(baseUrl).then((response) => {
    const data = response.data.cars;
    const allCarNames = new Set(data.map(each => each.car));
    const carNames = Array.from(allCarNames);
    setCarNames(carNames);
  });
}

export const getModels = ({requestedCarName, setCarModels}) => {
  const baseUrl =`https://myfakeapi.com/api/cars/name/${requestedCarName}`;

  axios.get(baseUrl).then((response) => {
    const cars = response.data.Cars;
    const allCarModels = new Set(cars.map(car => car.car_model));
    const carModels = Array.from(allCarModels);
    setCarModels(carModels);
  });
}
