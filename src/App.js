/** IMPORTEM les llibreries necessàries */
import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Image,
} from 'react-native';
// import Partit from './components/partit/Partit';
import { PaperProvider, Text } from 'react-native-paper';

const nom = (textAMostrar, estils) => {
  return (
    <Text style={estils.titol}>{textAMostrar}</Text>
  )
}

/** A la funció App, dins del return crearem la notra pantalla */
const App = () => {
  
  return (
    <PaperProvider>
      {nom("Rubén", estils)}
    </PaperProvider>
  );
}

/** En aquesta secció, crearem els estils a aplicar als nostres components */
const estils = StyleSheet.create({
  sectionContainer: {
    display: 'flex',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  titol: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  descripcio: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'LEMONMILK-LightItalic'
  },
  image: {
    width: '100%',
    height: 150,
    margin: 10
  }
});

export default App;