import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableHighlight, StyleSheet  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';

export default function Jogo({ route }) {
  const navigation = useNavigation();
  const [timerValue, setTimerValue] = useState(15);
  
  const avancar = (r) => {
    navigation.navigate('resposta', {r});
  };

  useEffect(() => {
    let interval;
    if (timerValue > 0) {
      interval = setInterval(() => {
        setTimerValue((prevValue) => prevValue - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timerValue]);

  return (
    <View style={styles.container}>
    <View style={styles.centeredDiv}>
        <TouchableHighlight
          style={styles.touchable}
          onPress={() => avancar(route.params?.r)}
        >
          <Text style={styles.centeredText}>{route.params?.r}</Text>
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
  },
  touchable: {
    width: '70%',
    alignSelf: 'center', // Centraliza horizontalmente
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: '-50%' }],
  },
  timer: {
    marginTop:'0%',
    width: '80%',
    height: '20%', // Adicionando uma altura para melhor visualização
    alignSelf: 'center',
    justifyContent: 'center', // Centraliza verticalmente
    backgroundColor: '#e0e0e0', // Adicionando uma cor de fundo para melhor visualização
  },
  centeredDiv: {
    marginTop:'40%',
    width: '50%',
    height: '50%', // Adicionando uma altura para melhor visualização
    alignSelf: 'center',
    justifyContent: 'center', // Centraliza verticalmente
    backgroundColor: '#e0e0e0', // Adicionando uma cor de fundo para melhor visualização
  },
  centeredText: {
    textAlign: 'center', 
  },
});
