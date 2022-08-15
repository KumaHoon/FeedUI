import React from 'react';
import {View, Text, Button} from 'react-native';

function Mainhome({navigation}) {
    return (
        <View>
            <Text>홈 화면</Text>
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    );
}

export default Mainhome;
