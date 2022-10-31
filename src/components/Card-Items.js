import React from 'react';
import { useState, useEffect } from 'react';
import { GetNames } from '../services/services';
import CardItem from './CardItem';

const CartItems = () => {
  const [ data, setData ] = useState([]);

  const baseUrl1 = "https://myfakeapi.com/api/cars/";

 useEffect (() => {
   GetNames({baseUrl1, setData});
 }, [])

  const allCarNames = new Set(data.map(each => each.car));
  const carNames = Array.from(allCarNames);

  return carNames.map((each, index) => {
    return <CardItem each={each} index={index} />
  })
} 

export default CartItems;