import { React, useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { getModels } from "../services/services";
import DetailedCardItems from "./Detailed-Card-Items";

const DetailsScreen = ({ route, navigation }) => {
  const { requestedCarName } = route.params;
  const [carsModelData, setCarModelsdata] = useState([]);

  useEffect(() => {
    getModels({ requestedCarName, setCarModelsdata });
  }, []);

  return (
    <ScrollView>
      <DetailedCardItems carsModelsData={carsModelData} />
    </ScrollView>
  );
};

export default DetailsScreen;
