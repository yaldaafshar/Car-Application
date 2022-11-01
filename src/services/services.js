import React from 'react';
import axios from 'axios';

export const GetNames = (props) => {
    const { setCarNames } = props;
    const baseUrl = "https://myfakeapi.com/api/cars/";
    
    axios.get(baseUrl).then((response) => {
      const data = response.data.cars;
      const allCarNames = new Set(data.map(each => each.car));
      const carNames = Array.from(allCarNames);
      setCarNames(carNames);
    });
}
