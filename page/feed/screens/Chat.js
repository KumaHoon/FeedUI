import React from 'react';
import { Text, View, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');

const Chat = () =>{
    
    return (
        <View style={{backgroundColor: 'white', height:'100%'}}>
            <Text>
                채팅
            </Text>
        </View>
    )
}

export default Chat;