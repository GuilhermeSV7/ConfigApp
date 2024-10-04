import React from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';  // Nova importação

const SliderComponent = ({ fontSize, setFontSize }) => {
  return (
    <View>
      <Text>Tamanho da Fonte: {fontSize}</Text>
      <Slider
        minimumValue={12}
        maximumValue={30}
        step={1}
        value={fontSize}
        onValueChange={setFontSize}
      />
    </View>
  );
};

export default SliderComponent;
