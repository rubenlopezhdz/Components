import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Image,
} from 'react-native';

// import Partit from './components/partit/Partit';
import { PaperProvider, Text, TextInput } from 'react-native-paper';

const Dades = () => {
  const [text, setText] = useState("");

  return (
    <TextInput
      label="Dades"
      value={text}
      onChangeText={text => setText(text)}
    />
  );
}

const Nom = ({textAMostrar, estils}) => {
  return (
    <Text style={estils}>{textAMostrar}</Text>
  );
}

const App = () => {
  return (
    <PaperProvider>
      <View style={estils.sectionContainer}>
        <Nom textAMostrar="Rubén" estils = {estils.titol} />
        <Dades />
      </View>
    </PaperProvider>
  );
}

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