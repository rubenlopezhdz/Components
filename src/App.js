import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

// import Partit from './components/partit/Partit';
import { PaperProvider, Text, TextInput } from 'react-native-paper';

const Dades = () => {
  
  const [valors, setValors] = useState([
    { label: 'Nom', value: ''},
    { label: 'Email', value: ''},
    { label: 'Telefon', value: ''},
  ]);

  const introduirText = (text, index) => {
    const rebreValors = valors.slice();
    rebreValors[index].value = text; 
    setValors(rebreValors);
  };

  return (
    <ScrollView>
      {valors.map((valor, index) => (
        <TextInput
          key={index}
          label={valor.label}
          value={valor.value}
          onChangeText={text => introduirText(text, index)}
        />
      ))}
    </ScrollView>
  );
}

const Nom = ({ textAMostrar, estils }) => {
  return (
    <Text style={estils}>{textAMostrar}</Text>
  );
}

const App = () => {
  return (
    <PaperProvider>
      <View style={estils.sectionContainer}>
        <Nom textAMostrar="Rubén López" estils={estils.titol} />
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
    fontStyle: 'italic'
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