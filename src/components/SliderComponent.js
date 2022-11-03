import { React } from "react";
import { Slider, Box, Center, NativeBaseProvider } from "native-base";
import { Text, StyleSheet } from "react-native";

const SliderComponent = ({ setRequestedYear, value }) => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Box style={styles.sliderComponent}>
          <Slider
            defaultValue={2000}
            colorScheme="indigo"
            minValue={1926}
            maxValue={2013}
            step={1}
            onChange={(v) => {
              setRequestedYear(v);
            }}
          >
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>
            <Slider.Thumb />
          </Slider>
          <Text>{value}</Text>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  sliderComponent: {
    marginBottom: 5,
    width: "100%",
    alignItems: "center",
  },
});

export default SliderComponent;
