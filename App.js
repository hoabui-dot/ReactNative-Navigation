/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/components/LoginForm/LoginForm';
import Todos from './src/components/Todos/Todos';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Todos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
