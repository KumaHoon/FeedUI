import React from 'react';
import { Text, View, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');

const Contact = () =>{
    
    return (
        <View style={{backgroundColor: 'white', height:'100%'}}>
            <Text>
                문의게시판
            </Text>
        </View>
    )
}

export default Contact;