import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from './Firebase';
import { Actions } from 'react-native-router-flux';
import {FormLabel, FormInput, Button, SocialIcon, Header} from 'react-native-elements';

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
        Actions.welcome();
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
                large
                buttonStyle={{backgroundColor: 'green', borderRadius: 5}}
                textStyle={{textAlign: 'center'}} />

                <SocialIcon
                  title='Log In With Facebook'
                  button
                  type='facebook'
                />

                <Text
                onPress={() => Actions.register()}
                style={styles.styling}
                >Create account</Text>

            </View>
        )
    }

    render(){
        return(
            <View style = {styles.container}>
                <Header
                leftComponent={{ icon: 'menu', color: '#F79F87' }}
                centerComponent={{ text: 'Login Form', style: { color: '#000' }}}
                rightComponent={{ icon: 'home', color: '#000' }}
                />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 30
  },
  styling: {
      marginTop: 10,
      alignItems: 'center',
      fontWeight: 'bold',
      color: '#000',
      fontSize: 20
  }
});
