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
    //1787157768249476
    async logInFB() {
      const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('256113041581235', {
          permissions: ['public_profile'],
        });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`);
        Actions.welcome();
      }
    }

    onLoginPress(){

        this.setState({error: '', loading: true});

        const{email, password} = this.state;

        firebase.auth().signInWithEmailAndPassword(email, password)

        .then(() => {
            this.setState({error: '', loading: false});
            Actions.welcome();
        })

        .catch(()=>{
            this.setState({error: 'Authentication Failed', loading: false});
        })

    }

    renderButtonOrLoading(){
        if(this.state.loading){
            return
                <Text style={styles.textStyling}>Loading</Text>
        }
        return (
            <View>
                <Button
                onPress={this.onLoginPress.bind(this)}
                title = 'Login'
                buttonStyle={{backgroundColor: 'green', borderRadius: 15, marginTop: 15}}
                textStyle={{textAlign: 'center'}} />

                <SocialIcon
                  title='Log In With Facebook'
                  button onPress={this.logInFB.bind(this)}
                  type='facebook'
                />

                <Text
                onPress={() => Actions.register()}
                style={styles.textStyling}
                >Create account</Text>

            </View>
        )
    }
    render(){
        return(
            <View style = {styles.container}>

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
                onChangeText={password => this.setState({password})}/>

                {this.renderButtonOrLoading()}

            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4E1',
  },
  textStyling: {
      marginTop: 10,
      alignItems: 'center',
      fontWeight: 'bold',
      color: '#000',
      fontSize: 20,
  }
});
