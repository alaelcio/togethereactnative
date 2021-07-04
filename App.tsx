import React from 'react';
import { StatusBar} from 'react-native';
import {useFonts} from 'expo-font';
import {Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter'
import AppLoading from 'expo-app-loading';


import SignIn from './src/screens/SignIn/index';

export default function App(){

  const [ fontsLoaded ]=useFonts({
    Inter_400Regular,
    Inter_500Medium,

  });

  if(!fontsLoaded){

      return <AppLoading/>
  }

  return(
    <>
    <StatusBar
                    
    barStyle="light-content"
    backgroundColor="transparent"
    translucent
    />
    
    <SignIn />

    </>
  );
}