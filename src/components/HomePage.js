import { React, useState, useEffect } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import CarDItems from "./Home-Card-Items";
import { getNames } from "../services/services";
import SearchBox from "./SearchBox";

const HomePage = ({ navigation }) => {
  const [carNames, setCarNames] = useState([]);
  const [query, setQuery] = useState("");
  const [placeholder, setPlaceHolder] = useState("Search Here..");

  useEffect(() => {
    getNames({ setCarNames });
  }, []);

  const filter = (car) => {
    if (query != "") {
      if (!car.toLowerCase().includes(query)) {
        return false;
      }
    }
    return true;
  };

  const filteredWord = (carNames) => {
    const requestedCar = carNames.filter(filter);
    return requestedCar;
  };

  return (
    <ScrollView style={styles.container}>
      <SearchBox query={query} setQuery={setQuery} placeholder={placeholder} />
      <View>
        {filteredWord.length != 0 ? (
          <CarDItems
            showList={filteredWord(carNames)}
            navigation={navigation}
          />
        ) : carNames ? (
          <CarDItems showList={carNames} navigation={navigation} />
        ) : null}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default HomePage;
