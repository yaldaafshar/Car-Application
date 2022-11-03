import { React } from "react";
import axios from "axios";

export const getNames = ({ setCarNames }) => {
  const baseUrl = "https://myfakeapi.com/api/cars/";

  axios.get(baseUrl).then((response) => {
    const data = response.data.cars;
    const allCarNames = new Set(data.map((each) => each.car));
    const carNames = Array.from(allCarNames);
    setCarNames(carNames);
  });
};

export const getModels = ({ requestedCarName, setCarModelsdata }) => {
  const baseUrl = `https://myfakeapi.com/api/cars/name/${requestedCarName}`;

  axios.get(baseUrl).then((response) => {
    const cars = response.data.Cars;
    setCarModelsdata(cars);
  });
};
