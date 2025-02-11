import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableHighlight, StyleSheet  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';

export default function Pergunta({ route }) {
  const navigation = useNavigation();
  const [timerValue, setTimerValue] = useState(15);
  const [timerRunning, setTimerRunning] = useState(false);
  
  const responder = () => {
    r = route.params?.r;
    vl = route.params?.vl;
    setTimerRunning(false);
    setTimerValue(15);
    navigation.navigate('resposta', {r,vl});
  };

  useEffect(() => {
    let interval;
    if (timerRunning && timerValue > 0) {
      interval = setInterval(() => {
        setTimerValue((prevValue) => prevValue - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timerRunning, timerValue]);

  const handleStartStopButton = () => {
    setTimerRunning(!timerRunning);
  };

  return (
  <View style={styles.container}>
    <View style={styles.timer}>
      <Text style={styles.timerText}>{timerValue} seconds</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={15}
        step={1}
        value={timerValue}
        thumbStyle={styles.thumbStyle}
      />
    </View>

    <View style={styles.centeredDiv}>
      <TouchableHighlight
        style={styles.touchable}
        onPress={responder}
        underlayColor="#DDDDDD"
      >
        <Text style={styles.centeredText}>{route.params?.p}</Text>
      </TouchableHighlight>

      <View style={styles.buttonContainer}>
        <Button
          title={timerRunning ? 'Stop Timer' : 'Start Timer'}
          onPress={handleStartStopButton}
          color="#007AFF"
        />
      </View>
    </View>
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  timer: {
    flex: 1,
    width: '95%',
    height: '15%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
  },
  timerText: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  slider: {
    marginTop: 10,
  },
  thumbStyle: {
    width: 15,
    height: 15,
    borderRadius: 40,
    backgroundColor: '#ff0000',
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
  buttonContainer: {
    marginTop:80,
    width: '100%',
  },
});
