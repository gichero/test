import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/LoginForm';
import RegisterForm from './src/RegisterForm';
import { Router, Scene } from 'react-native-router-flux';

export default class App extends React.Component {
  render() {
    return (
        <Router>
            <Scene key = 'root'>

            <Scene
            key = 'login'
            component = {LoginForm}
            title = 'Login Form'
            initial = {true}
            />

            <Scene
            key = 'register'
            component = {RegisterForm}
            title = 'Register Form'
            />

            </Scene>
        </Router>
    //   <View style={styles.container}>
    //     <Text>I'll have to use react router flux on this one!</Text>
    //     <Text>I am struggling and it's good.</Text>
    //     <Text>Shake your phone to open the developer menu.</Text>
    //   </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
