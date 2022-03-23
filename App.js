import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import Basket from './src/screen/Basket';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontLoading] = useFonts({
    "MontserratRegular":Montserrat_400Regular,
    "MontserratBold":Montserrat_700Bold,
  });

  if(!fontLoading){
    return <AppLoading />
  }

  return (
    <SafeAreaView>
      <Basket></Basket>
      <StatusBar></StatusBar>
    </SafeAreaView>
  );
}
