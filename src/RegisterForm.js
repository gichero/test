import React from 'react';
import { Text, View } from 'react-native';
import firebase from './Firebase';
import { Actions } from 'react-native-router-flux';
import {FormLabel, FormInput, Button} from 'react-native-elements';


export default class RegisterForm extends React.Component{
    constructor(props){
        super(props);
        this.state = { username: '', email: '', DOB: '', password: '', error: '' };
    }


    onSignUpPress(){
        this.setState({error: '', loading: false});

        const{email, password} = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(()=>{
            this.state({ error: '', loading: false });
        })
        .catch(()=>{
            this.setState({error: 'Email already in use', loading: false});
        })
    }

    renderButton(){

        return (
            <View>

                <Button onPress={this.onSignUpPress.bind(this)}
                title = 'Sign Up'
                raised
                buttonStyle={{backgroundColor: 'blue', borderRadius: 5}}
                textStyle={{textAlign: 'center'}}
                />

                <Text onPress={() => Actions.login()}>back</Text>
            </View>
        )
    }

    render(){
        return(
            <View>
                <FormLabel>Username</FormLabel>
                <FormInput
                value = {this.state.username}
                autoCapitalize = 'none'
                onChangeText={username => this.setState({username})}
                placeholder = 'username'
                />
                <FormLabel>Email</FormLabel>
                <FormInput
                value = {this.state.email}
                autoCapitalize = 'none'
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
                secureTextEntry
                onChangeText={password => this.setState({password})}
                placeholder = 'password'
                />
                {this.renderButton()}
            </View>
        )
    }
}
