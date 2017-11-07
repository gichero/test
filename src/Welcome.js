import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Welcome extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style = {styles.container}>
                <Text>Welcome</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#32cd32',
    }
});
