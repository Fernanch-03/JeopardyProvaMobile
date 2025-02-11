import React, { useState } from 'react'
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Home({ route }) {
  const navigation = useNavigation();

  function editar(){
    if(route.params?.p1){
      navigation.navigate('editar',
  {});
    }else{
      navigation.navigate('editar');
    }
      }
  function comecar(){
      if(route.params?.p1){
      navigation.navigate('jogo',
  {});
    }else{navigation.navigate('jogo')}
  }



  return(
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.title}>Bem-vindo à tela Home!</Text>
      <View style={styles.buttonContainer}>
        <Button title="Editar" onPress={editar} />
        <View style={{ marginRight: 10 }} /> {}
        <Button title="Iniciar jogo" onPress={comecar} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '30%',
  },
});

