import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ex  from './views/Ex.js'
import Ex2  from './views/Ex2'
import Ex3  from './views/Ex3'
import Ex4  from './views/Ex4'
import Ex5  from './views/Ex5'
import Ex6  from './views/Ex6'
import Desafio  from './views/Desafio'

export default function App() {
  return (
    <>
    <StatusBar hidden={true}/>
  <Desafio/>
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
