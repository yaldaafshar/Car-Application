import { React, useState } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import DetailedCardItem from './Detailed-Card-Item';
import SliderComponent from './SliderComponent';
import { CheckBox } from 'react-native-elements';
import SearchBox from './SearchBox';

const DetailedCardItems = ({carsModelsData}) => {

  const [ queryModel, setQueryModel ] =useState(''); 
  const [ queryColor, setQueryColor ] =useState('');
  const [ shouldFilterByYear, setShouldFilterByYear ] = useState(false);
  const [ requestYear, setRequestedYear] = useState('');
  const [ colorPlaceHolder, setColorPlaceHolder] = useState('Search for Color..');
  const [ modelPlaceHolder, setModelPlaceHolder] = useState('Search for Model..');


  const filter = (car) => {
    if(queryModel != ''){
      if(!car.car_model.toLowerCase().includes(queryModel)){
        return false
      }
    }
    if(queryColor != ''){
      if(!car.car_color.toLowerCase().includes(queryColor)){
        return false
      }
    }
    if(shouldFilterByYear){
      if(car.car_model_year !== requestYear){
        return false
      }
    }
    return true
    
  }

  const filterAll = (cars) => {
    const cars2 = cars.filter(filter)
    return cars2;
  }

  return (
    <ScrollView style={styles.detailed}>
      <SearchBox 
        query={queryModel}
        setQuery={setQueryModel}
        placeholder={modelPlaceHolder}
      />
      <SearchBox 
        query={queryColor}
        setQuery={setQueryColor}
        placeholder={colorPlaceHolder}
      />
      <View style={{flexDirection:'row', justifyContent:'center'}}>
        <Text style={{marginTop:17}}>Filter By Year :</Text>
        <CheckBox
          onPress={() => {
            setShouldFilterByYear(!shouldFilterByYear);
          }}
          checked={shouldFilterByYear}
          checkedColor='blue'
        />
      </View>
      <SliderComponent
        setRequestedYear={setRequestedYear}
        value={requestYear}
      />
      {carsModelsData.length != 0 ? filterAll(carsModelsData).map((carModelData, index) => {
     return <DetailedCardItem carModelData={carModelData} index={index}/>
   }) : null }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  detailed: {
    padding:10
  }
})
export default DetailedCardItems;