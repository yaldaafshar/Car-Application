import React from 'react';
import { Button, Card } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const CardItem = (props) => {
  
  const { index, each, navigation } = props;
  console.log("searched--->", each);
  return (
    <Card key={index} style={styles.card} >
      <Card.Title title={`Manufacturer: ${each}`}/>
      <Card.Cover source={{ uri: 'https://picsum.photos/id/111/200/100' }} />
      <Card.Actions>
      <Button onPress={() => 
        navigation.navigate('Details', {requestedCarName: each})}>View Details</Button>
    </Card.Actions>
  </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    marginBottom:15,
  }
})

export default CardItem;