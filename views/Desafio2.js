import React, {useState} from 'react'
import {View, StyleSheet, Text, Button, Switch, TextInput, ScrollView, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';


const Desafio2 = ({navigation}) => {

    const [numero, setNumero] = useState(0);
    const [estaLigado, setLigad] = useState(false);
    const [texto, setTexto] = useState("");

    return (
        <View style={styles.container}>
                <StatusBar hidden={true}/>
                <Image style={{marginTop: 25, width: 300, height: 300, borderRadius: 150}} source={require("../assets/images/1_xDi2csEAWxu95IEkaNdFUQ.png")}/>
                
                <Text>Felipe Almeida Silva</Text>
                <Text>27 anos</Text>
                <Text>Teresópolis/RJ</Text>

                <Button title="Sobre mim" onPress={() => setTexto("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum")}/>
                <ScrollView onScroll={() => setTexto("")} style={{flex:0, width: '80%'}}>
                    <Text style={{alignContent: 'center'}}>{texto}</Text>
                </ScrollView>
                <Button title="Exercícios" onPress={() => navigation.navigate('Desafio')}></Button>
                
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto: {
        fontSize: 50,
    }, 
    botao: {
        justifyContent: 'center',
        width: '80%',
        height: 50,
        backgroundColor: 'blue'
    },
    
})

export default Desafio2
