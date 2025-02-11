import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableHighlight, StyleSheet,TouchableOpacity, Alert  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const StorageKeys = {
  PONTO: 'PONTO',
  USER: 'USER',
  COUNT: 'COUNT',
};
export default function Pontuacao({ route }) {
 const navigation = useNavigation();
  const voltar = () => {
  const updatedCount = cont + 1;
  saveToStorage(StorageKeys.COUNT, updatedCount);

  console.log('updatedCount:', updatedCount);

  if (updatedCount === 9) {
    console.log('Chamando alertApp...');
    alertApp();
  } else {
    console.log('Navegando para "jogo"...');
    navigation.navigate('jogo');
  }
};

function alertApp() {
  console.log('Exibindo Alerta...');

  Alert.alert(
    `${user[0]} - ${ponto[0]}
    \n------------------------\n
    ${user[1]} - ${ponto[1]}
    \n------------------------\n
    ${user[2]} - ${ponto[2]}`,
    [
      { text: 'OK', onPress: () => navigation.navigate('Inicio') },
    ],
    { cancelable: false }
  );
}
  

  const [ponto, setPonto] = useState(Array.from({ length: 3 }, (_, index) => 0));
  const [cont, setCont] = useState (0);
  const [user, setUser] = useState(Array.from({ length: 3 }, (_, index) => ''));

  useEffect(() => {
    loadFromStorage(StorageKeys.USER, setUser);
    loadFromStorage(StorageKeys.PONTO, setPonto);
    loadFromStorage(StorageKeys.COUNT, setCont);
  }, [cont]);

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

   return (
  <View style={styles.container}>
    <View style={styles.columnsContainer}>
      {/* Coluna 1 */}
      <View style={styles.column}>
        <Text style={styles.title}>{user[0]}</Text>
        <Text>{"\n"}</Text>
        <Text>{ponto[0]}</Text>
        <Text>{"\n"}</Text>
      </View>

      {/* Coluna 2 */}
      <View style={styles.column}>
        <Text style={styles.title}>{user[1]}</Text>
        <Text>{"\n"}</Text>
        <Text>{ponto[1]}</Text>
        <Text>{"\n"}</Text>
      </View>

      {/* Coluna 3 */}
      <View style={styles.column}>
        <Text style={styles.title}>{user[2]}</Text>
        <Text>{"\n"}</Text>
        <Text>{ponto[2]}</Text>
        <Text>{"\n"}</Text>
      </View>
      </View>
    {/* TouchableOpacity (Substituindo o Button) */}
    <TouchableOpacity
      style={styles.touchableOpacity}
      onPress={() => voltar()}
    >
      <Text style={styles.btnText}>Voltar</Text>
    </TouchableOpacity>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', 
    justifyContent: 'space-around',
    marginTop: 20,
  },
   columnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    marginBottom: 30,
  },
  touchableOpacity: {
    marginTop: 10,
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
});

