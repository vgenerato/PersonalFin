import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('./Images/logoPersonalFin.png')}/>
      <Text style={styles.textWelcome}>PersonalFin</Text>
  </View>
  );
}

function DashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.textWelcome}>Aqui ficará o dashboard</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.textWelcome}>Aqui ficará a config</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Dash" component={DashScreen} />
        <Tab.Screen name="Configuração" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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