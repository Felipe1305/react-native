import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ex  from './views/Ex.js'
import Ex2  from './views/Ex2'
import Ex3  from './views/Ex3'
import Ex4  from './views/Ex4'
import Ex5  from './views/Ex5'
import Ex6  from './views/Ex6'
import Desafio  from './views/Desafio'
import CoreComponents from './views/CoreComponents.js';
import Desafio2 from './views/Desafio2.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen () {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  )
}

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name="Profile" component={Desafio2} />
      <Stack.Screen name="Desafio" component={Desafio} />
        

      </Stack.Navigator>
    </NavigationContainer>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box1: {
    flex: 1,
    backgroundColor: '#50E3C2',
    width: 116
  }
});
