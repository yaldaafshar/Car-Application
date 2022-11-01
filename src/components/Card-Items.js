import React from 'react';
import { useContext } from 'react';
import { GetNames } from '../services/services';
import CardItem from './CardItem';
import { CarContext } from '../contexts/CarContext';

const CartItems = ({showList}) => {

   return showList.map((each, index) => {
     return <CardItem each={each} index={index} />
   })
} 

export default CartItems;