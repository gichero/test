import React from 'react';
import firebase from './Firebase';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

export default class RegisterForm extends React.Component{
    constructor(props){
        super(props);
        this.state = { username: '', email: '', password: '', verifyPassword: '', error: '' };
    }
    onSignUpPress(){
        if (this.state.password == this.state.verifyPassword){
            this.setState({error: '', loading: true});

            const{ email, password } = this.state;
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(()=>{
                Actions.login();
                this.setState({ error: '', loading: false });
            })
            .then(()=>{
                this.setState({username: '', email: '', password: '', verifyPassword: ''});
            })
            .catch(()=>{
                this.setState({error: 'Email already in use', loading: false});
            })
        }else {
            console.log("Passwords do not match");
                this.setState({error: 'Passwords do not match', loading: false});
        }
    }
    render(){
        return(
            <Container>
                <Content>
                  <Form>
                    <Item floatingLabel>
                      <Label>Username</Label>
                      <Input
                      value = {this.state.username}
                      autoCapitalize = 'none'
                      onChangeText={username => this.setState({username})}
                      />
                    </Item>
                    <Item floatingLabel>
                      <Label>email</Label>
                      <Input
                      value = {this.state.email}
                      autoCapitalize = 'none'
                      onChangeText={email => this.setState({email})}
                       />
                    </Item>
                    <Item floatingLabel>
                      <Label>Password</Label>
                      <Input
                      value = {this.state.password}
                      autoCapitalize = 'none'
                      secureTextEntry
                      onChangeText={password => this.setState({password})}
                       />
                    </Item>
                    <Item floatingLabel>
                      <Label>Verify Password</Label>
                      <Input
                      value = {this.state.verifyPassword}
                      autoCapitalize = 'none'
                      secureTextEntry
                      onChangeText={verifyPassword => this.setState({verifyPassword})}
                       />
                    </Item>
                  </Form>
                      <Button block info
                      onPress={this.onSignUpPress.bind(this)}
                      ><Text>Create an account</Text>
                      </Button>
                </Content>
            </Container>
        )
    }
}
