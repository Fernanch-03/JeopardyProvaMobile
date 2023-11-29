import React, { useState } from 'react'
import { View, Text, Button, TextInput, FlatList } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';


export default function Editar({ route }) {
 const navigation = useNavigation();
const [t1p, setT1p] = useState(Array.from({ length: 9 }, (_, index) => route.params?.[`p${index + 1}`] || ''));
const [t1r, setT1r] = useState(Array.from({ length: 9 }, (_, index) => route.params?.[`r${index + 1}`] || ''));

 const valort1p = (text, index) => {
    const newValues = [...t1p];
    newValues[index] = text;
    setT1p(newValues);
  };
  const valort1r = (text, index) => {
    const newValues = [...t1r];
    newValues[index] = text;
    setT1r(newValues);
  };
  function salvarDados() {

  navigation.navigate('Inicio', 
  {p1:t1p[0],
  p2:t1p[1],
  p3:t1p[2],
  p4:t1p[3],
  p5:t1p[4],
  p6:t1p[5],
  p7:t1p[6],
  p8:t1p[7],
  p9:t1p[8],
  r1:t1r[0],
  r2:t1r[1],
  r3:t1r[2],
  r4:t1r[3],
  r5:t1r[4],
  r6:t1r[5],
  r7:t1r[6],
  r8:t1r[7],
  r9:t1r[8],
  });
}

  

 return (
   <View>
    <Text>Perguntas Tabela 1</Text>
    {t1p.slice(0, 3).map((value, index) => (
    <TextInput
    key={index.toString()}/*
    value={route.params?.p1}*/
    onChangeText={(text) => valort1p(text, index)}
    placeholder={/*route.params?.p1||*/`t1p ${index + 1}`}
    />
))}

      <Text>Perguntas Tabela 2</Text>
      {t1p.slice(3, 6).map((value, index) => (
  <TextInput
    key={index.toString()}
    onChangeText={(text) => valort1p(text, index+3)}
    placeholder={`t1p ${index + 4}`}
  />
))}

      <Text>Perguntas Tabela 3</Text>
      {t1p.slice(6, 9).map((value, index) => (

  <TextInput
    key={index.toString()}
    onChangeText={(text) => valort1p(text, index+6)}
    placeholder={`t1p ${index + 7}`}
  />
))}

//Fim perguntas

<Text>Respostas Tabela 1</Text>
    {t1r.slice(0, 3).map((value, index) => (
    <TextInput
    key={index.toString()}/*
    value={route.params?.r1}*/
    onChangeText={(text) => valort1r(text, index)}
    placeholder={/*route.params?.r1||*/`t1r ${index + 1}`}
    />
))}

  <Text>Respostas Tabela 2</Text>
  {t1r.slice(3, 6).map((value, index) => (
  <TextInput
    key={index.toString()}
    onChangeText={(text) => valort1r(text, index+3)}
    placeholder={`t1r ${index + 4}`}
  />
))}

  <Text>Respostas Tabela 3</Text>
  {t1r.slice(6, 9).map((value, index) => (

  <TextInput
    key={index.toString()}
    onChangeText={(text) => valort1r(text, index+6)}
    placeholder={`t1r ${index + 7}`}
  />
))}



    <FlatList
  data={t1p}
  renderItem={({ item, index }) => (
    <Text>{`Texto Desejado ${index + 1}: ${item}`}</Text>
  )}
  keyExtractor={(item, index) => index.toString()}
/>
  <FlatList
  data={t1r}
  renderItem={({ item, index }) => (
    <Text>{`Texto Desejado ${index + 1}: ${item}`}</Text>
  )}
  keyExtractor={(item, index) => index.toString()}
/>


     <Button
     title="Voltar para tela Home"
     onPress={ () => navigation.goBack() }
     />
     <Button
     title="Salvar"
     onPress={ () => salvarDados() }
     />
   </View>
  );
}
