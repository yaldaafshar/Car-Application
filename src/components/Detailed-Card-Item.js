import {React} from 'react';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const DetailedCardItem = ({carModelData, index}) => {
  return (
    <Card key={index} style={styles.card}>
     <Card.Title title={carModelData.car_model} 
      subtitle={`Car VIN number: ${carModelData.car_vin}`}/>
     <Card.Cover 
      source={{ uri: 'https://picsum.photos/id/183/300' }}/>
     <Card.Content>
      <Title>Details</Title>
      <Paragraph>{`Color: ${carModelData.car_color}`}</Paragraph>
      <Paragraph>{`Year: ${carModelData.car_model_year}`}</Paragraph>
      <Paragraph>{`Price Per Day: ${carModelData.price}`}</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button>ChOOSE</Button>
    </Card.Actions>
   </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    marginBottom:15,
  }
})

export default DetailedCardItem;