import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/LoginForm';
import RegisterForm from './src/RegisterForm';
import Welcome from './src/Welcome';
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

            <Scene
            key = 'welcome'
            component = {Welcome}
            title = 'Welcome'
            />

            </Scene>
        </Router>
    );
  }
}
