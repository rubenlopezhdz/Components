import React from "react";
import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const Partit = (props) => {
    return (
    <View style={styles.tarjeta}>
        <Text style={styles.textsEquips}> {props.e1} - {props.e2} </Text>
        <Text style={styles.textsResultats}> {props.r1} - {props.r2} </Text>
    </View>
    )
}

const styles = StyleSheet.create({
    textsEquips: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    textsResultats: {
        fontSize: 24,
        color: 'red',
    },
    tarjeta: {
        backgroundColor:'#BEEE62',
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 10,
        padding: 5,
        margin: 5,
    }
});
export default Partit;