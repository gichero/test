import React from 'react';
import { Button, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {FormLabel, FormInput} from 'react-native-elements';

export default class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = { email: '', password: '', error: '', loading: false };
    }

    renderButtonOrLoading(){
        if(this.state.loading){
            return
                <Text>Loading</Text>
        }
        return (
            <View>
                <Button title = 'Login' />

                <Button onPress={() => Actions.register()}
                title = 'Sign Up' />
            </View>
        )
    }

    render(){
        return(
            <View>
                <FormLabel>Email</FormLabel>
                <FormInput
                value = {this.state.email}
                autoCapitalize = 'none'
                onChangeText={email => this.setState({email})}
                placeholder = 'user@domain.com'
                />
                <FormLabel>Password</FormLabel>
                <FormInput
                value = {this.state.password}
                autoCapitalize = 'none'
                secureTextEntry
                placeholder = 'password'
                onChangeText={password => this.setState({password})}/>

                {this.renderButtonOrLoading()}
            </View>
        )
    }
}
