import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './src/pages/Landing'
import { AppLoading } from 'expo'
import { useFonts } from '@expo-google-fonts/archivo'
import { Archivo_400Regular, Archivo_700Bold } from '@expo-google-fonts/archivo'
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'
import AppStack from './src/routes/AppStack';



export default function App() {

  let [fontsLoadded] = useFonts({
    Archivo_400Regular,Archivo_700Bold,Poppins_400Regular,Poppins_600SemiBold
  })


  if(!fontsLoadded){
    return <AppLoading />
  }

  return (
    <>
      <AppStack />
      <StatusBar style="light" />
    </>
  );
}