import React, { useState } from 'react';
import {
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

  const [isAdmin, setIsAdmin] = useState(true);
  const [moduls2Dam, setModuls2Dam] = useState(
    [
      { nom: 'DIN', professor: 'Manel', hores: 120 },
      { nom: 'ADA', professor: 'Roberto', hores: 120 },
      { nom: 'PMDM', professor: 'Paco', hores: 100 },
      { nom: 'PSP', professor: 'Roberto', hores: 60 },
      { nom: 'SGE', professor: 'Belén', hores: 100 },
      { nom: 'Anglés', professor: 'Caterina', hores: 40 },
      { nom: 'EIE', professor: 'Ana', hores: 60 },
    ]
  );

  const introduirText = (text, index, valors, setValors) => {
    const array = [...valors];
    array[index].value = text;
    setValors(array);
  };

  const Dades = ({ estils, valors, setValors }) => {
    const estilTextInput = estils.florida;
    let cambiaTextColor = estilTextInput === estils.florida ? 'white' : 'orange';

    return (
      <ScrollView>
        {valors.map((valor, index) => (
          <TextInput
            style={estilTextInput}
            key={index.toString()}
            label={valor.label}
            value={valor.value}
            placeholder={valor.placeHolder}
            onChangeText={(text) => introduirText(text, index, valors, setValors)}
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

  const Moduls2Dam = ({ estils, moduls2Dam }) => {

    return (
      <View>
        {moduls2Dam.map((value, index) => {
          let cambiaEstils = index % 2 === 0 ? estils.bgColorRose : estils.bgColorRoseLight;
          return (
            <Text style={cambiaEstils} key={index.toString()}>
              {(index + 1) + '\n' + value.nom + '\n' + value.professor + '\n' + value.hores + ' hores'}
            </Text>
          )
        })}
      </View>
    )
  }

  return (
    <PaperProvider>
      <ScrollView>
        <View style={estils.sectionContainer}>
          <Nom textAMostrar="Rubén López" estils={estils.titol} />
          <Dades estils={estils} valors={valors} setValors={setValors}/>
          <BotoInformes estils={estils} />
          <Moduls2Dam estils={estils} moduls2Dam={moduls2Dam} />
        </View>
      </ScrollView>
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
  },
  bgColorRose: {
    backgroundColor: '#F48FB1',
  },
  bgColorRoseLight: {
    backgroundColor: '#F8BBD0',
  }
});

export default App;