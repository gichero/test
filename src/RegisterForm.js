import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from './Firebase';
import { Actions } from 'react-native-router-flux';
import {FormLabel, FormInput, Button, Header} from 'react-native-elements';


export default class RegisterForm extends React.Component{
    constructor(props){
        super(props);
        this.state = { username: '', email: '', DOB: '', password: '', verifyPassword: '', error: '' };
    }


    onSignUpPress(){
        if (this.state.password == this.state.verifyPassword){
            this.setState({error: '', loading: false});

            const{email, password} = this.state;
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(()=>{
                this.state({ error: '', loading: false });
            })
            .catch(()=>{
                this.setState({error: 'Email already in use', loading: false});
            })

        }else {
            console.log("Passwords do not match");
                this.setState({error: 'Passwords do not match', loading: false});

        }
    }

    renderButton(){

        return (
            <View>
                <Button onPress={this.onSignUpPress.bind(this)}
                title = 'Create an account'
                raised
                buttonStyle={{backgroundColor: 'blue', borderRadius: 5}}
                textStyle={{textAlign: 'center'}}
                />

                <Text
                onPress={() => Actions.login()}
                style={styles.styling}
                title = 'Back'
                />
            </View>
        )
    }

    render(){
        return(
            <View>
                <Header
                leftComponent={{ icon: 'menu', color: '#F79F87' }}
                centerComponent={{ text: 'Register Form', style: { color: '#000' }}}
                rightComponent={{ icon: 'home', color: '#000' }}

                />
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
                <FormLabel>Verify Password</FormLabel>
                <FormInput
                value = {this.state.verifyPassword}
                autoCapitalize = 'none'
                secureTextEntry
                onChangeText={verifyPassword => this.setState({verifyPassword})}
                placeholder = 'verify password'
                />
                {this.renderButton()}
            </View>
        )
    }
}
const styles = StyleSheet.create({
  styling: {
      marginTop: 10,
      alignItems: 'center',
      fontWeight: 'bold',
      color: '#000',
      fontSize: 20
  }
});
