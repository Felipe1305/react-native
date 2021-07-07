import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Ex6 = () => {
    return (
        <View style={styles.container}>
        <View style={styles.container2}>
        <View style={styles.box1}></View>
        <View style={styles.box1}></View>
        <View style={styles.box1}></View>
        </View>

        <View style={styles.container2}>
        <View style={styles.box2}></View>
        <View style={styles.box2}></View>
        <View style={styles.box2}></View>
        </View>

        <View style={styles.container2}>
        <View style={styles.box3}></View>
        <View style={styles.box3}></View>
        <View style={styles.box3}></View>
        </View>

        <View style={styles.container2}>
        <View style={styles.box4}></View>
        <View style={styles.box4}></View>
        <View style={styles.box4}></View>
        </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    
    //   flexWrap:'wrap',
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   justifyContent: 'space-around',
      
    },     container2: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: 'center',      },
   box1: {
    width: 116,
    height: 116,
    backgroundColor: '#50E3C2',
    // marginTop: 100
  },
  box2: {
    width: 116,
    height: 116,
    backgroundColor: '#4A90E2',
    // marginTop: 100
  },
  box3: {
    width: 116,
    height: 116,
    backgroundColor: '#9013FE',
    // marginTop: 100
  },
  box4: {
    width: 116,
    height: 116,
    backgroundColor: '#F5A623',
    // marginTop: 100
  }

 
  });
export default Ex6;