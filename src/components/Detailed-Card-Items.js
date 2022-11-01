import {React} from 'react';
import { Button, Card } from 'react-native-paper';
import { StyleSheet, ScrollView } from 'react-native';
import DetailedCardItem from './Detailed-Card-Item';


const DetailedCardItems = ({carModelsData}) => {
  console.log("car model data --->", carModelsData);
  return (
    <ScrollView style={styles.detailed}>
      {carModelsData.length != 0 ? carModelsData.map((carModelData, index) => {
     return <DetailedCardItem carModelData={carModelData} index={index} />
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