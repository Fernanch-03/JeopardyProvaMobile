import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableHighlight, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const StorageKeys = {
  PONTO: 'PONTO',
  USER: 'USER',
};

export default function Resultado({ route }) {
 const navigation = useNavigation();

  function AumentaPonto (){
    const novoPonto = [...ponto];
    vl = route.params?.vl;
    for(x = 0; x<3; x++){
      novoPonto[x] = novoPonto[x] * vl
      novoPonto[x] = novoPonto[x] + pontoTotal[x]
    }
    saveToStorage(StorageKeys.PONTO, novoPonto);


    navigation.navigate('pontuacao',{});
  }

  const [ponto, setPonto] = useState(Array.from({ length: 3 }, (_, index) => 0));
  const [user, setUser] = useState(Array.from({ length: 3 }, (_, index) => ''));
  const [pontoTotal, setPontoTotal] = useState(Array.from({ length: 3 }, (_, index) => 0));
  

  useEffect(() => {
    loadFromStorage(StorageKeys.PONTO, setPontoTotal);
    loadFromStorage(StorageKeys.USER, setUser);

  }, []);

  const saveToStorage = async (key, data) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      Alert(`Erro ao salvar dados no AsyncStorage (${key}):`, error);
    }
  };
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


  function aumentar(index) {
    const novoPonto = [...ponto];
    if((novoPonto[index]) <1 && (novoPonto[index])>-2){
    novoPonto[index] =  novoPonto[index]+1;
    setPonto(novoPonto);
    }
  }
  function diminuir(index) {
    const novoPonto = [...ponto];
    if((novoPonto[index]) <2 && (novoPonto[index])>-1){
    novoPonto[index] =  novoPonto[index]-1;
    setPonto(novoPonto);
    }
  }

   return (
  <View style={styles.container}>
    <View style={styles.columnsContainer}>
      {/* Coluna 1 */}
      <View style={styles.column}>
        <Text style={styles.title}>{user[0]}</Text>
        <Button title="+" onPress={() => aumentar(0)} color="green"/>
        <Text>{"\n"}</Text>
        <Text>{ponto[0]}</Text>
        <Text>{"\n"}</Text>
        <Button title="-" onPress={() => diminuir(0)} color="red"/>
      </View>

      {/* Coluna 2 */}
      <View style={styles.column}>
        <Text style={styles.title}>{user[1]}</Text>
        <Button title="+" onPress={() => aumentar(1)} color="green"/>
        <Text>{"\n"}</Text>
        <Text>{ponto[1]}</Text>
        <Text>{"\n"}</Text>
        <Button title="-" onPress={() => diminuir(1)} color="red"/>
      </View>

      {/* Coluna 3 */}
      <View style={styles.column}>
        <Text style={styles.title}>{user[2]}</Text>
        <Button title="+" onPress={() => aumentar(2)} color="green"/>
        <Text>{"\n"}</Text>
        <Text>{ponto[2]}</Text>
        <Text>{"\n"}</Text>
        <Button title="-" onPress={() => diminuir(2)} color="red"/>
      </View>
    </View>

    {/* TouchableOpacity (Abaixo das colunas) */}
    <View styles={styles.containerButton}>
    <TouchableOpacity 
    style={styles.touchableOpacity}
    onPress={()=> AumentaPonto()}>
      <Text style={styles.btnText}>Avançar</Text>
    </TouchableOpacity>
    </View>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', 
    justifyContent: 'space-between',
    marginTop: 20,
  },
  columnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  column: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  touchableOpacity: {
    width: '100%',
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#FFF',
  },
  containerButton:{
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
    },
});

