import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableHighlight, StyleSheet  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StorageKeys = {
  USER: 'USER',
  T1P: 'T1P',
  T1R: 'T1R',
  TITULO:'TITULO',
};

export default function Jogo({ route }) {
 const navigation = useNavigation();

 const [t1p, setT1p] = useState(Array.from({ length: 9 }, (_, index) => ''));
  const [t1r, setT1r] = useState(Array.from({ length: 9 }, (_, index)=> ''));
  const [user, setUser] = useState(Array.from({ length: 3 }, (_, index)=> '')); 
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

  const enviarQuestao = (nr, vl) => {
    p = t1p[nr-1];
    r = t1r[nr-1];
    navigation.navigate('pergunta', {p,r,vl});
  };

    

   return (
    <View style={styles.container}>
      {/* Coluna 1 */}
      <View style={styles.column}>
        <Text style={styles.title}>{titulo[0]}</Text>
        <TouchableHighlight
          style={styles.touchable}
          onPress={() => enviarQuestao(1,100)}
        >
          <Text styles={styles.branco}>100</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.touchable}
          onPress={() => enviarQuestao(2, 200)}
        >
          <Text styles={styles.branco}>200</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.touchable}
          onPress={() => enviarQuestao(3, 300)}
        >
          <Text styles={styles.branco}>300</Text>
        </TouchableHighlight>
      </View>

      {/* Coluna 2 */}
      <View style={styles.column}>
        <Text style={styles.title}>{titulo[1]}</Text>
        <TouchableHighlight
          style={styles.touchable}
          onPress={() => enviarQuestao(4,100)}
        >
          <Text styles={styles.branco}>100</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.touchable}
          onPress={() => enviarQuestao(5, 200)}
        >
          <Text styles={styles.branco}>200</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.touchable}
          onPress={() => enviarQuestao(6, 300)}
        >
          <Text styles={styles.branco}>300</Text>
        </TouchableHighlight>
      </View>

      {/* Coluna 3 */}
      <View style={styles.column}>
        <Text style={styles.title}>{titulo[2]}</Text>
        <TouchableHighlight
          style={styles.touchable}
          onPress={() => enviarQuestao(7,100)}
        >
          <Text styles={styles.branco}>100</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.touchable}
          onPress={() => enviarQuestao(8, 200)}
        >
          <Text styles={styles.branco}>200</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.touchable}
          onPress={() => enviarQuestao(9, 300)}
        >
          <Text styles={styles.branco}>300</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    color: 'white'
  },
  column: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    color: 'white'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white'
  },
  touchable: {
    padding: 10,
    backgroundColor: '#007AFF',
    marginVertical: 5,
    color: 'white'
  },
  branco:{
    color: 'white',
  },
});

