import React, {useState} from 'react'
import {View, StyleSheet, Text, Button, Switch, TextInput, ScrollView, Image} from 'react-native';

const CoreComponents = () => {

    const [numero, setNumero] = useState(0);
    const [estaLigado, setLigad] = useState(true);
    const [texto, setTexto] = useState("");

    return (
        <View style={styles.container}>
            <Text>{numero}</Text>
            <View>
                <Button disabled={estaLigado} title="Atualizar" onPress={() => setNumero(numero +1)}/>
                <Button disabled={estaLigado} title="Decrementar" onPress={() => setNumero(numero -1)}/>
                <Button disabled={estaLigado} title="Resetar" onPress={() => setNumero(0)}/>
            </View>
                <Switch style={{flex:1}} value={estaLigado} onValueChange={() => setLigad(!estaLigado)}/>
                <Switch value={estaLigado} onValueChange={setLigad}/>
                
                <TextInput 
                value={texto} 
                style={{backgroundColor:'#4A90E2', width: '60%'}} 
                onChangeText={setTexto}
                placeholder="Insira um texto"
                keyboardType="numeric"/>

                <Image style={{width: 300, height: 300, borderRadius: 100}} source={require("../assets/images/1_xDi2csEAWxu95IEkaNdFUQ.png")}/>

                <ScrollView style={{flex:0}}> 
                    <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum,
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </Text>
                </ScrollView>
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

export default CoreComponents
