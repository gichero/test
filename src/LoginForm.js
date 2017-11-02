import React from 'react';
import { Text, View } from 'react-native';
import firebase from './Firebase';
import { Actions } from 'react-native-router-flux';
import {FormLabel, FormInput, Button} from 'react-native-elements';

export default class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = { email: '', password: '', error: '', loading: false };
    }

    onLoginPress(){
        this.setState({error: '', loading: true});

        const{email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            this.setState({error: '', loading: false});
        })
        .catch(()=>{
            this.setState({error: 'Authentication Failed', loading: false});
        })
    }

    renderButtonOrLoading(){
        if(this.state.loading){
            return
                <Text>Loading</Text>
        }
        return (
            <View>
                <Button onPress={this.onLoginPress.bind(this)}
                title = 'Login'
                raised
                buttonStyle={{backgroundColor: 'green', borderRadius: 5}}
                textStyle={{textAlign: 'center'}} />

                <Text onPress={() => Actions.register()}
                >Create account</Text>
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
