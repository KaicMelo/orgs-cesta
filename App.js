import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Cesta from './src/telas/Cesta';

export default function App() {
  return (
    <SafeAreaView>
      <Cesta></Cesta>
      <StatusBar></StatusBar>
      <Text>Alura</Text>
    </SafeAreaView>
  );
}
