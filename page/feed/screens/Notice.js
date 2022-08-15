import React from 'react';
import { Text, View, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');

const Notice = () =>{
    
    return (
        <View style={{backgroundColor: 'white', height:'100%'}}>
            <Text>
                공지사항
            </Text>
        </View>
    )
}

export default Notice;