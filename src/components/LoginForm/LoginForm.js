/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, Image, View, SafeAreaView} from 'react-native';
import styles from './LoginFormStyle';
import logo from '../../images/logo.png';

export default function LoginForm() {
  return (
    <SafeAreaView styles={styles.container}>
      <View styles={styles.content}>
        <Image style={styles.titleLogo} source={logo} />
      </View>
    </SafeAreaView>
  );
}
