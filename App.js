import React from 'react';
import { SafeAreaView } from 'react-native';
import PreferencesScreen from './src/screens/PreferencesScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Tela principal de configurações */}
      <PreferencesScreen />
    </SafeAreaView>
  );
}
