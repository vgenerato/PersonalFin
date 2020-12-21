import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, View, Text } from 'react-native';

function Teste() {
    return (
        <View style={styles.container}>
            <Text style={styles.textWelcome}>Settings!</Text>
        </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333',
    },
    textWelcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#fff',
    },
})