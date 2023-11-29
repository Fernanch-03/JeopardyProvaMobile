import React, { useState } from 'react'
import { View, Text, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Home({ route }) {
  const navigation = useNavigation();
  const perguntaObject = route.params?.perguntaObject;
  const p1 = route.params?.p1;
  const p2 = route.params?.p2;
  const p3 = route.params?.p3;
  const p4 = route.params?.p4;
  const p5 = route.params?.p5;
  const p6 = route.params?.p6;
  const p7 = route.params?.p7;
  const p8 = route.params?.p8;
  const p9 = route.params?.p9;
  const r1 = route.params?.r1;
  const r2 = route.params?.r2;
  const r3 = route.params?.r3;
  const r4 = route.params?.r4;
  const r5 = route.params?.r5;
  const r6 = route.params?.r6;
  const r7 = route.params?.r7;
  const r8 = route.params?.r8;
  const r9 = route.params?.r9;


  
  


  function editar(){
    if(route.params?.p1){
      navigation.navigate('editar',
  {p1,p2,p3,p4,p5,p6,p7,p8,p9,r1,r2,r3,r4,r5,r6,r7,r8,r9});
    }else{
      navigation.navigate('editar');
    }
      }
  function comecar(){
      if(route.params?.p1){
      navigation.navigate('jogo',
  {p1,p2,p3,p4,p5,p6,p7,p8,p9,r1,r2,r3,r4,r5,r6,r7,r8,r9});
    }
  }



  return(
    <View>
      <Text>Home</Text>
      <Text>Bem vindo a tela Home!</Text>
      <Button
      title="Ir para tela editar"
      onPress={editar}
      />
      <Button
      title="Ir para tela inicir jogo"
      onPress={comecar}
      />
          <View>
      <Text>Valor da pergunta 1: {route.params?.p1}</Text>
      <Text>Valor da pergunta 9: {route.params?.p9}</Text>
      
      <Text>Valor da reposta 1: {route.params?.r1}</Text>
      <Text>Valor da reposta 9: {route.params?.r9}</Text>
      {/* Adicione mais Text components conforme necessário */}
    </View>

    </View>
  )
}
