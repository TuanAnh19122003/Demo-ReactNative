import { View, Text } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal';
import EvilIcons from '@react-native-vector-icons/evil-icons';
import Icon from '@react-native-vector-icons/fontawesome6';
import LoginScreen from './src/components/screens/LoginScreen';
import RegisterScreen from './src/components/screens/RegisterScreen';
import HomeScreen from './src/components/screens/homeScreen';

export default function App() {
  return (
    <View style={{ flex:1, paddingTop:10 }}>
      {/* <Modal isVisible={true}>
        <Icon name="rocket" size={30} color="red" iconStyle="solid" />
        <EvilIcons name="arrow-down" color="#ff0000" size={60} />
        <View style={{ flex: 1 }}>
          <Text>I am the modal content!</Text>
        </View>
      </Modal> */}
      {/* <LoginScreen /> */}
      {/* <RegisterScreen /> */}
      <HomeScreen />
    </View>
  );
}