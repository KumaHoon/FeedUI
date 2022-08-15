import React from 'react';
import { Text, View, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');

const Setting = () =>{
    
    return (
        <View style={{backgroundColor: 'white', height:'100%'}}>
            <Text>
                설정
            </Text>
        </View>
    )
}

export default Setting;