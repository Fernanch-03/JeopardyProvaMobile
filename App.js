
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Inicio from './src/iniciarJogo';
import Editar from './src/editar';
import Jogo from './src/jogo/index';
import Pergunta from './src/pergunta/index';
import Resposta from './src/resposta/index';
import Pontuacao from './src/pontuacao/index';
import Resultados from './src/resultados/index';


const Stack = createStackNavigator();


export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        
        <Stack.Screen
        name="Inicio"
        component={Inicio}
        
          options={{
            cardStyle: {
             backgroundColor: '#060CE9', 
            },
          title:'Início',
          headerStyle:{
            backgroundColor: 'orange'
          },
          headerTintColor: '#FFF',
          headerShown: false,
        }}
        />

        <Stack.Screen
        name="editar"
        component={Editar}
        options={{
          cardStyle: {
             backgroundColor: '#060CE9', 
            },
          title:'Editar',
          headerStyle:{
            backgroundColor: 'orange'
          },
          headerTintColor: '#FFF',
          screenOptions: {
            shouldPersist: true,
          },
          headerShown: false,
        }}
        />

        <Stack.Screen
        name="jogo"
        component={Jogo}
        options={{
          title:'Jogo',
            cardStyle: {
             backgroundColor: '#060CE9', 
            },
          headerStyle:{
            backgroundColor: 'orange'
          },
          headerTintColor: '#FFF',
          
          screenOptions: {
            shouldPersist: true, 
          },
          headerShown: false,
        }}
        />

        <Stack.Screen
        name="pergunta"
        component={Pergunta}
        options={{
          cardStyle: {
             backgroundColor: '#060CE9', 
            },
          title:'Pergunta',
          headerStyle:{
            backgroundColor: 'orange'
          },
          headerTintColor: '#FFF',
          headerShown: false,
        }}
        />

        <Stack.Screen
        name="resposta"
        component={Resposta}
        options={{
          cardStyle: {
             backgroundColor: '#060CE9', 
            },
          title:'Resposta',
          headerStyle:{
            backgroundColor: 'orange'
          },
          headerTintColor: '#FFF',
          headerShown: false,
        }}
        />
        <Stack.Screen
        name="resultado"
        component={Resultados}
        options={{
          cardStyle: {
             backgroundColor: '#060CE9', 
            },
          title:'Resultados',
          headerStyle:{
            backgroundColor: 'orange'
          },
          headerTintColor: '#FFF',
          screenOptions: {
            shouldPersist: true, // Manter o estado ao alternar entre as telas
          },
          headerShown: false,
        }}
        />

        <Stack.Screen
        name="pontuacao"
        component={Pontuacao}
        options={{
          cardStyle: {
             backgroundColor: '#060CE9', 
            },
          title:'Pontuacao',
          headerStyle:{
            backgroundColor: 'orange'
          },
          headerTintColor: '#FFF',
          screenOptions: {
            shouldPersist: true, // Manter o estado ao alternar entre as telas
          },
          headerShown: false,
        }}
        />



      </Stack.Navigator>
    </NavigationContainer>
  )
}
