import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Ex5 = () => {
    return (
        <View style={styles.container}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
   box1: {
    width: 116,
    height: 116,
    backgroundColor: '#50E3C2',
  },
  box2: {
    width: 116,
    height: 116,
    backgroundColor: '#4A90E2',
  },
  box3: {
    width: 116,
    height: 116,
    backgroundColor: '#9013FE',
  }
  });
export default Ex5;