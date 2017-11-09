import React from 'react';
import firebase from './Firebase';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import {SocialIcon} from 'react-native-elements';


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
        .then(() => {
            this.setState({email:'', password: ''});
        })
        .catch(()=>{
            this.setState({error: 'Authentication Failed', loading: false});
        })
    }

    render(){
        return(

            <Container>
                <Content>
                  <Form>
                    <Item floatingLabel>
                      <Label>Email</Label>
                      <Input
                          value = {this.state.email}
                          autoCapitalize = 'none'
                          onChangeText={email => this.setState({email})}
                      />
                    </Item>
                    <Item floatingLabel last>
                      <Label>Password</Label>
                      <Input
                           value = {this.state.password}
                           autoCapitalize = 'none'
                           secureTextEntry
                           onChangeText={password => this.setState({password})}
                       />
                    </Item>
                  </Form>
                      <Button block info
                      onPress={this.onLoginPress.bind(this)}
                      ><Text>Login</Text>
                      </Button>

                      <SocialIcon
                        title='Log In With Facebook'
                        button onPress={this.logInFB.bind(this)}
                        type='facebook'
                      />
                      <Button block info
                      onPress={() => Actions.register()}
                      ><Text>Create account</Text>
                      </Button>

                </Content>
            </Container>
        )
    }
}
