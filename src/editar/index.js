import React, { useState, useEffect } from 'react'
import { View, Text, Button, TextInput, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StorageKeys = {
  USER: 'USER',
  T1P: 'T1P',
  T1R: 'T1R',
  TITULO: 'TITULO',
};

const SectionTitle = ({ title }) => <Text style={styles.sectionTitle}>{title}</Text>;

const CustomTextInput = ({ placeholder, onChangeText, value }) => (
  <TextInput
    style={styles.textInput}
    placeholder={placeholder}
    onChangeText={onChangeText}
    value={value}
  />
);

const CustomFlatList = ({ data, renderItem }) => (
  <FlatList data={data} renderItem={renderItem} keyExtractor={(item, index) => index.toString()} />
);

const QuestionAnswerPair = ({ title, question, answer, onQuestionChange, onAnswerChange }) => (
  <View style={styles.questionAnswerPair}>
  <Text style={styles.sectionTitle}>Pergunta {title}</Text>
    <TextInput
      style={styles.textInput}
      onChangeText={onQuestionChange}
      value={question}
      placeholder="Pergunta"
    />
    <TextInput
      style={styles.textInput}
      onChangeText={onAnswerChange}
      value={answer}
      placeholder="Resposta"
    />

  </View>
);

export default function Editar({ route }) {
  const navigation = useNavigation();
  const [t1p, setT1p] = useState(Array.from({ length: 9 } , (_, index) => ''));
  const [t1r, setT1r] = useState(Array.from({ length: 9 }, (_, index) => ''));
  const [user, setUser] = useState(Array.from({ length: 3 }, (_, index) => ''));
  const [titulo, setTitulo] = useState(Array.from({ length: 3 }, (_, index) => ''));

  useEffect(() => {
    loadFromStorage(StorageKeys.USER, setUser);
    loadFromStorage(StorageKeys.T1P, setT1p);
    loadFromStorage(StorageKeys.T1R, setT1r);
    loadFromStorage(StorageKeys.TITULO, setTitulo);

  }, []);

  const loadFromStorage = async (key, setter) => {
    try {
      const storedData = await AsyncStorage.getItem(key);
      if (storedData !== null) {
        setter(JSON.parse(storedData));
      }
    } catch (error) {
      console.error(`Erro ao carregar dados do AsyncStorage (${key}):`, error);
    }
  };

  const saveToStorage = async (key, data) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      Alert(`Erro ao salvar dados no AsyncStorage (${key}):`, error);
    }
  };
  const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('AsyncStorage foi limpo com sucesso.');
    window.location.reload();
  } catch (error) {
    console.error('Erro ao limpar AsyncStorage', error);
  }
};

  const userAleatorio = async () => {
    try {
      const newValues = [...user];
      for(x = 0; x<=2; x++){
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      newValues[x] = data.results[0].name.first; // Usando o primeiro nome da lista
      setUser(newValues);
      saveToStorage(StorageKeys.USER,newValues);
      }
    } catch (error) {
      console.error('Erro ao consultar a API:', error);
    }
  };


  const valorUser = (text, index) => {
    const newValues = [...user];
    newValues[index] = text;
    setUser(newValues);
    saveToStorage(StorageKeys.USER, newValues);
  };

  const valort1p = (text, index) => {
    const newValues = [...t1p];
    newValues[index] = text;
    setT1p(newValues);
    saveToStorage(StorageKeys.T1P, newValues);
  };

  const valort1r = (text, index) => {
    const newValues = [...t1r];
    newValues[index] = text;
    setT1r(newValues);
    saveToStorage(StorageKeys.T1R, newValues);
  };

  const valortitulo = (text, index) => {
    const newValues = [...titulo];
    newValues[index] = text;
    setTitulo(newValues);
    saveToStorage(StorageKeys.TITULO, newValues);
  };

  function salvarDados() {

  navigation.navigate('Inicio', 
  {});

}

  

 return (
   <View style={styles.container}>
      <SectionTitle title="Usuários" />
      {user.slice(0, 3).map((value, index) => (
        <CustomTextInput
          key={index.toString()}
          onChangeText={(text) => valorUser(text, index)}
          value={value}
          placeholder={`Usuário número ${index + 1}`}
        />
      ))}
      <Button
     title="Randomizar Usuarios"
     onPress={userAleatorio}
     />

      <SectionTitle title="Títulos" />
      {titulo.slice(0, 3).map((value, index) => (
        <CustomTextInput
          key={index.toString()}
          onChangeText={(text) => valortitulo(text, index)}
          value={value}
          placeholder={`Titulo da tabela ${index + 1}`}
        />
      ))}
     
      {t1p.slice(0, 9).map((value, index) => (
        <QuestionAnswerPair
          key={index.toString()}
          title={index + 1}
          question={value}
          answer={t1r[index]}
          onQuestionChange={(text) => valort1p(text, index)}
          onAnswerChange={(text) => valort1r(text, index)}
        />
      ))}

     <Button
     title="Limpar dados"
     onPress={ () => clearStorage() }
     />
     <Button
     title="Salvar"
     onPress={ () => salvarDados() }
     />
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    color: 'white'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    color: 'white'
  },
});
