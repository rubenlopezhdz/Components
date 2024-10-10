/** IMPORTEM les llibreries necessàries */
import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Partit from './components/partit/Partit';

/** A la funció App, dins del return crearem la notra pantalla */
const App = () => {
  
  return (
    <View>
      <StatusBar />
      <ScrollView>
        <View>
          <Text style={estils.titol}> Resultats Lliga 24-25 </Text>
          <Image style={estils.image} source={require('./assets/img/benson.jpeg')}></Image>
          <Partit style={estils.descripcio}e1='Valencia CF' e2='Betis' r1='5' r2='0'></Partit>
          <Partit e1='Barcelona CF' e2='Juventus' r1='2' r2='2'></Partit>
          <Partit e1='Real Madrid' e2='Atlético de Madrid' r1='3' r2='4'></Partit>
          <Partit e1='Girona CF' e2='Celta' r1='5' r2='2'></Partit>
          <Partit e1='UD Palmas' e2='Getafe' r1='0' r2='0'></Partit>
        </View>
      </ScrollView>
    </View>
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