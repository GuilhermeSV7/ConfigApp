import React, { useState } from 'react';
import { View, Button } from 'react-native';
import PickerComponent from '../components/PickerComponent';
import SliderComponent from '../components/SliderComponent';
import SwitchComponent from '../components/SwitchComponent';
import styles from '../styles/styles';

const PreferencesScreen = () => {
  // Estado para tema, tamanho da fonte e modo noturno
  const [theme, setTheme] = useState('claro');
  const [fontSize, setFontSize] = useState(16);
  const [nightMode, setNightMode] = useState(false);

  // Função para resetar as preferências
  const resetPreferences = () => {
    setTheme('claro');
    setFontSize(16);
    setNightMode(false);
  };

  return (
    <View style={styles.container}>
      <PickerComponent theme={theme} setTheme={setTheme} />
      <SliderComponent fontSize={fontSize} setFontSize={setFontSize} />
      <SwitchComponent nightMode={nightMode} setNightMode={setNightMode} />
      <Button title="Resetar Preferências" onPress={resetPreferences} />
    </View>
  );
};

export default PreferencesScreen;
