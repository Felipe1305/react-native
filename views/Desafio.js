import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Desafio = () => {
    return (
        <View style={styles.containerExterno}>
        <View style={styles.container1}>
        <View style={styles.box1}></View>
        </View>

        <View style={styles.container3}>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
        </View>

        <View style={styles.barraRetangulos}>
        <View style={styles.box5}></View>
        <View style={styles.box6}></View>
        </View>

        <View style={styles.barra}>
        <View style={styles.box8}></View>
        </View>

        <View style={styles.container}>

        <View style={styles.container2}>
        <View style={styles.box4}></View>
        <View style={styles.box4}></View>
        <View style={styles.box4}></View>
        </View>

        <View style={styles.container2}>
        <View style={styles.box4}></View>
        <View style={styles.box4}></View>
        <View style={styles.box4}></View>
        </View>

      
        </View>
        <View style={styles.barraFinal}>
        <View style={styles.box7}></View>
        </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 2,
      
    },containerExterno: {
        flex: 1
        }, 
        barraRetangulos: {
            flexDirection: "row",
        },

     container1: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: 'baseline',      },
        

         container2: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: 'center',      },

        container3: {
            flex:1,
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 50,
        },

   box1: {
    width: '100%',
    height: 25,    backgroundColor: '#50E3C2',
    alignItems: 'flex-end'
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: '#F5A623',
  },
  box3: {
    width: 160,
    height: 30,
    backgroundColor: '#F5A623',
  },
  box4: {
    width: 100,
    height: 100,
    backgroundColor: '#F5A623',
  },
  box5: {
    width: '50%',
    height: 78,
    backgroundColor: '#9013FE',
  },
  box6: {
    width: '50%',
    height: 78,
    backgroundColor: '#4A90E2',
  },
  box7: {
    width: '100%',
    height: 60,
    backgroundColor: '#4A90E2',
  },
  box8: {
    width: '100%',
    height: 13,    backgroundColor: '#50E3C2',
    alignItems: 'flex-end'
  }
  
  });
export default Desafio;