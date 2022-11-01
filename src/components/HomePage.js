import { Searchbar } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { useContext, useState, useEffect } from 'react';
import CartItems from './Card-Items';
import { CarContext } from '../contexts/CarContext';
import { GetNames } from '../services/services';

const HomePage = () => {

  const { setCarNames, carNames } = useContext(CarContext);
  const [ query, setQuery ] =useState('');
  const [ requestedCar, setRequestedcar ] =useState('');


  useEffect (() => {
   GetNames({setCarNames});
  }, [])

  
  const onSearchText = (word) => {
    setQuery(word);
    const filteredWord = carNames.filter(
      (carName) => carName.toLowerCase() === word.toLowerCase()
    );
    setRequestedcar(filteredWord)
  }


  return(
    <View>
        <Searchbar 
          placeholder="Search Here..."
          onChangeText={onSearchText}
          style={styles.searchBox}
          value={query}
          />
      <View>
        {requestedCar.length != 0 ? <CartItems showList={requestedCar}/> :  carNames? <CartItems showList={carNames}/> : null}
      </View>
    </View>
)}

const styles = StyleSheet.create({
  searchBox: {
    marginBottom:15,
  },
})


export default HomePage;