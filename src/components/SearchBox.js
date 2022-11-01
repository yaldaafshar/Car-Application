import { Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useState } from 'react';

const SearchBox = (props) => {
  
  const [ query, setQuery ] =useState(''); 
  const {cars, setRequestedcar} =props;

  const onSearchText = (word) => {
    setQuery(word);
    const filteredWord = cars.filter(carName => 
    carName.toLowerCase() === word.toLowerCase());
    setRequestedcar(filteredWord)
  }

  return (
    <Searchbar 
      placeholder="Search Here..."
      onChangeText={onSearchText}
      style={styles.searchBox}
      value={query}
    />
  )
}

const styles = StyleSheet.create({
  searchBox: {
    marginBottom:15,
  },
})

export default SearchBox;