import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/LoginForm';
import RegisterForm from './src/RegisterForm';
import Welcome from './src/Welcome';
import Lost from './src/Lost';
import Found from './src/Found';
import Post from './src/Post';
import { Router, Scene } from 'react-native-router-flux';

const TabIcon = ({selected, title}) => {
    return(
        <Text style={{color: selected ? 'red' : 'black'}}>{title}</Text>
    );
};

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
                key = "tabbar"
                tabs
                tabsBarStyle = {{backgroundColor: "#1e90ff"}}
                >
                    <Scene
                    key = 'welcome'
                    component = {Welcome}
                    title = 'Welcome'
                    />
                    <Scene key = "lost" title = "Lost" icon = {TabIcon}>
                        <Scene
                        key = 'lost'
                        component = {Lost}
                        title = 'Lost'
                        />
                    </Scene>
                    <Scene key = "post" title = "Post" icon = {TabIcon}>
                        <Scene
                        key = 'post'
                        component = {Post}
                        title = 'Post'
                        />
                    </Scene>
                    <Scene key = "found" title = "Found" icon = {TabIcon}>
                        <Scene
                        key = 'found'
                        component = {Found}
                        title = 'Found'
                        />
                    </Scene>
                </Scene>
            </Scene>
        </Router>
    );
  }
}
