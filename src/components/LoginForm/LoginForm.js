/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, Image, View, SafeAreaView} from 'react-native';
import styles from './LoginFormStyle';
import logo from '../../images/logoImg.png';

export default function LoginForm() {
  return (
    <SafeAreaView>
      <Image style={styles.titleLogo} source={logo} />
      {/* <View style={styles.title}></View> */}
    </SafeAreaView>
  );
}
