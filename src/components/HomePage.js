import { View, ScrollView, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import CarDItems from './Card-Items';
import { getNames } from '../services/services';
import SearchBox from './SearchBox';

const HomePage = ({ navigation }) => {

  const [ carNames, setCarNames ] = useState([]);
  const [ query, setQuery ] =useState('');
  const [ requestedCar, setRequestedcar ] =useState('');

  useEffect (() => {
   getNames({setCarNames});
  }, [])

  const onSearchText = (word) => {
    setQuery(word);
    const filteredWord = carNames.filter(carName => 
    carName.toLowerCase() === word.toLowerCase());
    console.log("filtered word",filteredWord);
    setRequestedcar(filteredWord)
  }

  return(
    <ScrollView style={styles.container} >
        <SearchBox 
          cars={carNames}
          setRequestedcar={setRequestedcar}
          />
      <View>
        {requestedCar.length != 0 ? 
          <CarDItems showList={requestedCar} navigation={navigation}/> :
          carNames? <CarDItems showList={carNames} navigation={navigation}/> : null}
      </View>
    </ScrollView>
)}


const styles = StyleSheet.create({
  container: {
    padding:10
  },
});

export default HomePage;