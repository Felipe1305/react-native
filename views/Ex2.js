import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Ex2 = () => {
    return (
        <View style={styles.container}>
        <View style={styles.box1}></View>
        </View>
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
export default Ex2;