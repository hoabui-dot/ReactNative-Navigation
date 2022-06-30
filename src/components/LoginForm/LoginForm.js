/* eslint-disable prettier/prettier */
import React from 'react';
import {
  TextInput,
  Image,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './LoginFormStyle';
import logo from '../../images/logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {updateEmail} from '../../redux/actions/updateAction';

export default function LoginForm({navigation}) {
  const [account, setAccount] = React.useState({
    username: '',
    password: '',
  });
  const [email, setEmail] = React.useState('');
  const [userNameText, setUserNameText] = React.useState('');
  const [passwordText, setPasswordText] = React.useState('');
  const info = useSelector(state => state.personalInfo);

  React.useEffect(() => {
    getTodosFromUserDevice();
    console.log(account);
    console.log(info);
  }, []);

  React.useEffect(() => {
    saveTodoToUserDevice(account);
  }, [account]);

  // Use LocalStorage to save database
  const saveTodoToUserDevice = async account => {
    try {
      const stringifyTodos = JSON.stringify(account);
      await AsyncStorage.setItem('account', stringifyTodos);
    } catch (error) {
      console.log(error);
    }
  };

  // Use LocalStorage to get database
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
    <ScrollView styles={styles.container}>
      <View styles={styles.content}>
        <Image style={styles.titleLogo} source={logo} />

        {/*Input UserName */}
        <TextInput
          value={userNameText}
          style={styles.name}
          placeholder="UserName"
          onChangeText={e => {
            setAccount({...account, username: e});
            setUserNameText(e);
          }}
        />

        {/* Input Password */}
        <TextInput
          value={passwordText}
          style={styles.password}
          placeholder="Password"
          onChangeText={e => {
            setAccount({...account, password: e});
            setPasswordText(e);
          }}
          secureTextEntry
        />

        {/* Login Button */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            navigation.navigate('Home');
            setUserNameText('');
            setPasswordText('');
          }}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        {/* Showing Account View */}
        <View style={styles.showAccount}>
          <Text>User Name: {account.username}</Text>
          <Text>Password: {account.password}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Input New Email"
              style={{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                width: 200,
                borderRadius: 5,
                borderColor: '#ccc',
              }}
            />

            {/* Button Update Email */}
            <TouchableOpacity
              onPress={() => {
                updateEmail(email);
                setEmail('');
              }}
              style={{
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                height: 40,
                width: 60,
                borderRadius: 5,
                borderColor: '#ccc',
                backgroundColor: '#3B71F3',
              }}>
              <Text style={{color: 'white'}}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
