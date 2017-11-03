import React from 'react';
import { Text, View } from 'react-native';

export default class Welcome extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <Text>Welcome</Text>
            </View>
        )
    }
}
