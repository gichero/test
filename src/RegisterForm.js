import React from 'react';
import { Button, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {FormLabel, FormInput} from 'react-native-elements';


export default class RegisterForm extends React.Component{
    constructor(props){
        super(props);
        this.state = { username: '', email: '', DOB: '', password: '' };
    }

    renderButton(){

        return (
            <View>

                <Button onPress={() => Actions.login()}
                title = 'Log in' />
            </View>
        )
    }

    render(){
        return(
            <View>
                <FormLabel>Username</FormLabel>
                <FormInput
                value = {this.state.usermail}
                autoCapitalize = 'none'
                onChangeText={username => this.setState({username})}
                placeholder = 'user@domain.com'
                />
                <FormLabel>Email</FormLabel>
                <FormInput
                value = {this.state.email}
                autoCapitalize = 'none'
                secureTextEntry
                placeholder = 'user@domail.com'
                onChangeText={email => this.setState({email})}
                />
                <FormLabel>DOB</FormLabel>
                <FormInput
                value = {this.state.dob}
                autoCapitalize = 'none'
                onChangeText={dob => this.setState({dob})}
                placeholder = 'date of birth'
                />
                <FormLabel>Password</FormLabel>
                <FormInput
                value = {this.state.password}
                autoCapitalize = 'none'
                onChangeText={password => this.setState({password})}
                placeholder = 'password'
                />
                {this.renderButton()}
            </View>
        )
    }
}
