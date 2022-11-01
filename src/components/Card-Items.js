import CardItem from './CardItem';

const CarDItems = ({showList, navigation}) => {
  
   return showList.map((each, index) => {
     return <CardItem each={each} index={index} navigation={navigation}  />
   })
} 

export default CarDItems;