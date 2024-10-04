import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';  // Nova importação

const PickerComponent = ({ theme, setTheme }) => {
  return (
    <View>
      <Text>Selecionar Tema:</Text>
      <Picker
        selectedValue={theme}
        onValueChange={(itemValue) => setTheme(itemValue)}
      >
        <Picker.Item label="Claro" value="claro" />
        <Picker.Item label="Escuro" value="escuro" />
        <Picker.Item label="Automático" value="automatico" />
      </Picker>
    </View>
  );
};

export default PickerComponent;
