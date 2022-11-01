import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import HomePage from './src/components/HomePage';
import { CarProvider } from './src/contexts/CarContext';
import { GetNames } from './src/services/services';

export default App = () => {
  return (
    <View style={styles.container}>
      <CarProvider>
        <HomePage/>
      </CarProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
});
