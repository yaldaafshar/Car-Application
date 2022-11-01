import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { getModels } from '../services/services';
import { React, useEffect,useState } from 'react';
import DetailedCardItems from './Detailed-Card-Items'

const DetailsScreen = ({ route, navigation }) => {

  const { requestedCarName } = route.params;
  const [ carsModelData, setCarModelsdata] = useState([]);


  useEffect (() => {
   getModels({requestedCarName, setCarModelsdata});
  }, []);

  return(
    <DetailedCardItems carModelsData={carsModelData}/>
  )
}

export default DetailsScreen;