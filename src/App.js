import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

// import Partit from './components/partit/Partit';
import { PaperProvider, Text, TextInput } from 'react-native-paper';

const Dades = ({estil}) => {

  const [valors, setValors] = useState([
    { label: 'Nom', value: '' },
    { label: 'Email', value: '' },
    { label: 'Telefon', value: '' },
  ]);

  const introduirText = (text, index) => {
    const rebreValors = valors.slice();
    rebreValors[index].value = text;
    setValors(rebreValors);
  };

  return (
    <ScrollView>
      {valors.map((valor, index) => (
        <TextInput style={estil}
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

  const [estil, setEstil] = useState(estils.florida);

  return (
    <PaperProvider>
      <View style={estils.sectionContainer}>
        <Nom textAMostrar="Rubén López" estils={estils.titol} />
        <Dades estil={estil}/>
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
  }, 
  upv: {
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
  },
  florida: {
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;