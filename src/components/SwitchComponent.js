import React from 'react';
import { View, Text, Switch } from 'react-native';

const SwitchComponent = ({ nightMode, setNightMode }) => {
  return (
    <View>
      <Text>Modo Noturno: {nightMode ? 'Ativado' : 'Desativado'}</Text>
      <Switch
        value={nightMode}
        onValueChange={setNightMode}
      />
    </View>
  );
};

export default SwitchComponent;
