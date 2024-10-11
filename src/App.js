import React, { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

// import Partit from './components/partit/Partit';
import { PaperProvider, Text, TextInput, Button } from 'react-native-paper';

const App = () => {

  const [valors, setValors] = useState([
    { label: 'Nom', value: '', placeHolder: 'Nom' },
    { label: 'Email', value: '', placeHolder: 'Email' },
  ]);
  const [estil, setEstil] = useState(estils.florida);
  const [isAdmin, setIsAdmin] = useState(true);

  const introduirText = (text, index) => {
    const rebreValors = valors.slice();
    rebreValors[index].value = text;
    setValors(rebreValors);
  };

  const Dades = ({ estil }) => {
    let cambiaTextColor = estil === estils.florida ? "white" : "orange";

    return (
      <ScrollView>
        {valors.map((valor, index) => (
          <TextInput style={estil}
            key={index}
            label={valor.label}
            value={valor.value}
            placeholder={valor.placeHolder}
            onChangeText={text => introduirText(text, index)}
            textColor={cambiaTextColor}
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

  const BotoInformes = ({ estils }) => {
    return (
      isAdmin ? (
        <Button style={estils.boto} icon="format-list-bulleted" mode="contained">
          <Text style={estils.descripcio}>Informes</Text>
        </Button>) : null
    )
  }

  return (
    <PaperProvider>
      <View style={estils.sectionContainer}>
        <Nom textAMostrar="Rubén López" estils={estils.titol} />
        <Dades estil={estil} />
        <BotoInformes estils={estils} />
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
    fontSize: 12,
    color: 'white'
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
  boto: {
    backgroundColor: 'purple',
    width: '100%',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0
  }
});

export default App;