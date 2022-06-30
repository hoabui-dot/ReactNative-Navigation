/* eslint-disable prettier/prettier */
import React from 'react';
import {
  TextInput,
  Image,
  View,
  SafeAreaView,
  Text,
  Pressable,
} from 'react-native';
import styles from './LoginFormStyle';
import logo from '../../images/logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginForm({navigation}) {
  const [account, setAccount] = React.useState({username: '', password: ''});

  React.useEffect(() => {
    getTodosFromUserDevice();
    console.log(account);
  }, []);

  React.useEffect(() => {
    saveTodoToUserDevice(account);
  }, [account]);

  const saveTodoToUserDevice = async account => {
    try {
      const stringifyTodos = JSON.stringify(account);
      await AsyncStorage.setItem('account', stringifyTodos);
    } catch (error) {
      console.log(error);
    }
  };

  const getTodosFromUserDevice = async () => {
    try {
      const account = await AsyncStorage.getItem('account');
      if (account != null) {
        setAccount(JSON.parse(account));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView styles={styles.container}>
      <View styles={styles.content}>
        <Image style={styles.titleLogo} source={logo} />
        <TextInput
          style={styles.name}
          placeholder="UserName"
          onChangeText={e => setAccount({...account, username: e})}
        />

        <TextInput
          style={styles.password}
          placeholder="Password"
          onChangeText={e => setAccount({...account, password: e})}
          secureTextEntry
        />
        <Pressable
          style={styles.loginButton}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={styles.loginText}>Login</Text>
        </Pressable>
        <View style={styles.showAccount}>
          <Text>User Name: {account.username}</Text>
          <Text>Password: {account.password}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
