import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableHighlight, StyleSheet  } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Jogo({ route }) {
 const navigation = useNavigation();

  const enviarQuestao = (nr, vl) => {
    p = route.params?.[`p${nr}`]
    r = route.params?.[`p${nr}`]
    navigation.navigate('pergunta', {p,r,vl});
  };


   return (
    <View style={styles.container}>
      {/* Coluna 1 */}
      <View style={styles.column}>
        <Text style={styles.title}>Coluna 1</Text>
        <TouchableHighlight
          style={styles.touchable}
          onPress={() => enviarQuestao(1,100)}
        >
          <Text>Div 1</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.touchable}
          onPress={() => handlePress(1, 2)}
        >
          <Text>Div 2</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.touchable}
          onPress={() => handlePress(1, 3)}
        >
          <Text>Div 3</Text>
        </TouchableHighlight>
      </View>

      {/* Coluna 2 */}
      <View style={styles.column}>
        <Text style={styles.title}>Coluna 2</Text>
        <TouchableHighlight
          style={styles.touchable}
          onPress={() => handlePress(2, 1)}
        >
          <Text>Div 1</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.touchable}
          onPress={() => handlePress(2, 2)}
        >
          <Text>Div 2</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.touchable}
          onPress={() => handlePress(2, 3)}
        >
          <Text>Div 3</Text>
        </TouchableHighlight>
      </View>

      {/* Coluna 3 */}
      <View style={styles.column}>
        <Text style={styles.title}>Coluna 3</Text>
        <TouchableHighlight
          style={styles.touchable}
          onPress={() => handlePress(3, 1)}
        >
          <Text>Div 1</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.touchable}
          onPress={() => handlePress(3, 2)}
        >
          <Text>Div 2</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.touchable}
          onPress={() => handlePress(3, 3)}
        >
          <Text>Div 3</Text>
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
  column: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  touchable: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    marginVertical: 5,
  },
});

