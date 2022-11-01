import { View,   } from 'react-native';
import { Text } from 'react-native-paper';
import { getModels } from '../services/services';
import { React, useEffect,useState } from 'react';



const DetailsScreen = ({ route, navigation }) => {

  const { requestedCarName } = route.params;
  const [ carModels, setCarModels] = useState([]);

  useEffect (() => {
   getModels({requestedCarName, setCarModels});
  }, []);

  return(
    <View>
      <Text>{carModels}</Text>
    </View>
  )
}

export default DetailsScreen;