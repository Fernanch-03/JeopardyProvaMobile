import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableHighlight, StyleSheet  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Resposta({ route }) {
  const navigation = useNavigation();
  
  const avancar = () => {
    vl = route.params?.vl;
    navigation.navigate('resultado', {vl});
  };


  return (
    <View style={styles.container}>
    <View style={styles.centeredDiv}>
        <TouchableHighlight
          style={styles.touchable}
          onPress={avancar}
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
  centeredDiv: {
    width: '90%',
    height: '50%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop:40,
  },
  touchable: {
    width: '85%',
    padding: 20,
    backgroundColor: '#007AFF',
    borderRadius: 10,
  },
  centeredText: {
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
  },
});
